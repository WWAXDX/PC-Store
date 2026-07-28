import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  // True whenever the most recent API call failed (e.g. backend down). Components can
  // read this to show a real error message to the user instead of failing silently.
  apiError = signal(false);

  constructor(private http: HttpClient) {}

  // Get all products from API
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('getAllProducts', []))
    );
  }

  // Get product by ID from API
  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product | undefined>('getProductById', undefined))
    );
  }

  // Get products filtered by category and/or search term - both are applied server-side
  // by the API, so results are consistent no matter how many products exist.
  getProducts(
    category?: string | null,
    search?: string | null,
    filters?: {
      brand?: string | null;
      minPrice?: number | null;
      maxPrice?: number | null;
      inStock?: boolean | null;
    }
  ): Observable<Product[]> {
    let params = new HttpParams();
    if (category) params = params.set('category', category);
    if (search) params = params.set('search', search);
    if (filters?.brand) params = params.set('brand', filters.brand);
    if (filters?.minPrice != null) params = params.set('minPrice', String(filters.minPrice));
    if (filters?.maxPrice != null) params = params.set('maxPrice', String(filters.maxPrice));
    if (filters?.inStock) params = params.set('inStock', 'true');

    return this.http.get<Product[]>(this.apiUrl, { params }).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/brands`).pipe(
      catchError(this.handleError<string[]>('getBrands', []))
    );
  }

  // Filter products by category or subcategory from API
  filterProducts(category: string | null): Observable<Product[]> {
    return this.getProducts(category, null);
  }

  // Group products by subcategory
  groupBySubCategory(products: Product[]): { [key: string]: Product[] } {
    const grouped: { [key: string]: Product[] } = {};
    products.forEach(product => {
      const subCat = product.subCategory;
      if (!grouped[subCat]) {
        grouped[subCat] = [];
      }
      grouped[subCat].push(product);
    });
    return grouped;
  }

  // --- Admin-only (requires an Admin JWT, attached automatically by the auth interceptor) ---

  createProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Centralized error handling so the UI doesn't fail silently when the API is down
  private handleError<T>(operation: string, fallbackValue: T) {
    return (error: unknown): Observable<T> => {
      console.error(`ProductService.${operation} failed:`, error);
      this.apiError.set(true);
      return of(fallbackValue);
    };
  }
}
