import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  private router = inject(Router);
  private langService = inject(LanguageService);
  private authService = inject(AuthService);
  private seo = inject(SeoService);

  isLoginMode = signal(true);
  showForgot = signal(false);
  forgotSent = signal(false);
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  fullName = signal('');
  loading = signal(false);
  error = signal('');
  info = signal('');
  showPassword = signal(false);
  showConfirmPassword = signal(false);

  t = (key: string) => this.langService.t(key);

  constructor() {
    this.seo.setPage('Login', 'Sign in or create an account at PC Parts Store.');
  }

  toggleMode() {
    this.isLoginMode.set(!this.isLoginMode());
    this.showForgot.set(false);
    this.forgotSent.set(false);
    this.error.set('');
    this.info.set('');
    this.resetForm();
  }

  openForgot() {
    this.showForgot.set(true);
    this.forgotSent.set(false);
    this.error.set('');
    this.info.set('');
    this.password.set('');
  }

  backToLogin() {
    this.showForgot.set(false);
    this.forgotSent.set(false);
    this.error.set('');
    this.info.set('');
  }

  togglePasswordVisibility() {
    this.showPassword.set(!this.showPassword());
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword.set(!this.showConfirmPassword());
  }

  resetForm() {
    this.email.set('');
    this.password.set('');
    this.confirmPassword.set('');
    this.fullName.set('');
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onForgotSubmit() {
    this.error.set('');
    this.info.set('');

    if (!this.email() || !this.validateEmail(this.email())) {
      this.error.set(this.t('login.errorInvalidEmail'));
      return;
    }

    // Demo only — no email is sent
    this.forgotSent.set(true);
    this.info.set(this.t('login.forgotDemoSent'));
  }

  onSubmit() {
    this.error.set('');
    this.info.set('');

    if (!this.email() || !this.password()) {
      this.error.set(this.t('login.errorRequired'));
      return;
    }

    if (!this.validateEmail(this.email())) {
      this.error.set(this.t('login.errorInvalidEmail'));
      return;
    }

    if (this.password().length < 6) {
      this.error.set(this.t('login.errorPasswordShort'));
      return;
    }

    if (!this.isLoginMode()) {
      if (!this.fullName()) {
        this.error.set(this.t('login.errorFullName'));
        return;
      }

      if (this.password() !== this.confirmPassword()) {
        this.error.set(this.t('login.errorPasswordMismatch'));
        return;
      }
    }

    this.loading.set(true);

    const request$ = this.isLoginMode()
      ? this.authService.login(this.email(), this.password())
      : this.authService.register(this.fullName(), this.email(), this.password());

    request$.subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err: Error) => {
        this.loading.set(false);
        this.error.set(err.message || this.t('login.errorGeneric'));
      }
    });
  }

  socialLogin(_provider: string) {
    this.error.set('');
    this.info.set(this.t('login.socialDemo'));
  }
}
