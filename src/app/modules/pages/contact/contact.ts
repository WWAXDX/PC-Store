import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from '../../../services/language.service';
import { SeoService } from '../../../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './../content-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private lang = inject(LanguageService);
  private seo = inject(SeoService);
  t = (k: string) => this.lang.t(k);
  sent = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit() { this.seo.setPage('Contact', 'Contact PC Parts Store.'); }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.sent.set(true);
    this.form.reset();
  }
}
