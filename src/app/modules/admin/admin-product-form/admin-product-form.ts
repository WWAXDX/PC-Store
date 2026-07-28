import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { LanguageService } from '../../../services/language.service';
import { Product } from '../../../models/product.model';

// Mirrors the category/subcategory structure used for browsing in the navbar, so
// products created here show up correctly under existing filters.
const CATEGORY_OPTIONS: { key: string; label: string; subCategories: string[] }[] = [
  {
    key: 'pc-parts',
    label: 'PC Parts',
    subCategories: [
      'Graphics Cards (GPU)', 'Processors (CPU)', 'Memory (RAM)',
      'Storage (SSD/HDD)', 'Motherboards', 'Power Supplies', 'Cases', 'CPU Coolers'
    ]
  },
  {
    key: 'monitors',
    label: 'Monitors',
    subCategories: ['Gaming Monitors', '4K Monitors', 'Ultrawide Monitors', 'Professional Monitors']
  },
  {
    key: 'chairs',
    label: 'Chairs',
    subCategories: ['Gaming Chairs', 'Office Chairs', 'Ergonomic Chairs']
  },
  {
    key: 'accessories',
    label: 'Accessories',
    subCategories: [
      'Keyboards', 'Mice', 'Headsets', 'Speakers', 'Webcams',
      'Cables', 'Adapters', 'USB Hubs', 'Cleaning Kits', 'Thermal Paste'
    ]
  }
];

@Component({
  selector: 'app-admin-product-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './admin-product-form.html',
  styleUrls: ['./admin-product-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminProductForm implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private langService = inject(LanguageService);

  categoryOptions = CATEGORY_OPTIONS;
  productId = signal<number | null>(null);
  isEditMode = signal(false);
  loading = signal(false);
  saving = signal(false);
  errorMessage = signal('');

  t = (key: string) => this.langService.t(key);

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    category: ['pc-parts', Validators.required],
    subCategory: ['', Validators.required],
    desc: ['', [Validators.required, Validators.maxLength(500)]],
    description: [''],
    features: [''], // one feature per line in the textarea
    descAr: [''],
    descriptionAr: [''],
    featuresAr: [''], // one feature per line in the textarea
    image: ['', Validators.required],
    onSale: [false],
    salePrice: [null],
    discount: [null],
    brand: [''],
    stock: [20, [Validators.required, Validators.min(0)]]
  });

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.productId.set(id);
      this.isEditMode.set(true);
      this.loading.set(true);

      this.productService.getProductById(id).subscribe(product => {
        this.loading.set(false);
        if (!product) {
          this.errorMessage.set(this.t('admin.notFound'));
          return;
        }
        this.form.patchValue({
          ...product,
          features: (product.features || []).join('\n'),
          featuresAr: (product.featuresAr || []).join('\n')
        });
      });
    }
  }

  getSubCategoriesFor(categoryKey: string): string[] {
    return this.categoryOptions.find(c => c.key === categoryKey)?.subCategories || [];
  }

  onCategoryChange() {
    // Reset subcategory when switching category since the previous choice may not apply
    this.form.patchValue({ subCategory: '' });
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const value = this.form.value;
    const product: Product = {
      id: this.productId() ?? 0,
      name: value.name.trim(),
      price: Number(value.price),
      category: value.category,
      subCategory: value.subCategory,
      desc: value.desc.trim(),
      description: value.description?.trim() || undefined,
      features: (value.features as string)
        .split('\n')
        .map((f: string) => f.trim())
        .filter((f: string) => f.length > 0),
      descAr: value.descAr?.trim() || undefined,
      descriptionAr: value.descriptionAr?.trim() || undefined,
      featuresAr: ((value.featuresAr as string) || '')
        .split('\n')
        .map((f: string) => f.trim())
        .filter((f: string) => f.length > 0),
      image: value.image.trim(),
      onSale: !!value.onSale,
      salePrice: value.onSale ? Number(value.salePrice) : undefined,
      discount: value.onSale ? Number(value.discount) : undefined,
      brand: value.brand?.trim() || undefined,
      stock: Number(value.stock)
    };

    this.saving.set(true);
    this.errorMessage.set('');

    const onSuccess = () => {
      this.saving.set(false);
      this.router.navigate(['/admin/products']);
    };
    const onError = () => {
      this.saving.set(false);
      this.errorMessage.set(this.t('admin.saveError'));
    };

    if (this.isEditMode()) {
      this.productService.updateProduct(product.id, product).subscribe({ next: onSuccess, error: onError });
    } else {
      this.productService.createProduct(product).subscribe({ next: onSuccess, error: onError });
    }
  }
}
