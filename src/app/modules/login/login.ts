import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

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

  isLoginMode = signal(true);
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  fullName = signal('');
  loading = signal(false);
  error = signal('');
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  
  t = (key: string) => this.langService.t(key);

  toggleMode() {
    this.isLoginMode.set(!this.isLoginMode());
    this.error.set('');
    this.resetForm();
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

  onSubmit() {
    this.error.set('');

    // Validation
    if (!this.email() || !this.password()) {
      this.error.set('Please fill in all required fields');
      return;
    }

    if (!this.validateEmail(this.email())) {
      this.error.set('Please enter a valid email address');
      return;
    }

    if (this.password().length < 6) {
      this.error.set('Password must be at least 6 characters');
      return;
    }

    if (!this.isLoginMode()) {
      if (!this.fullName()) {
        this.error.set('Please enter your full name');
        return;
      }

      if (this.password() !== this.confirmPassword()) {
        this.error.set('Passwords do not match');
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
        this.error.set(err.message || 'An error occurred. Please try again.');
      }
    });
  }

  socialLogin(provider: string) {
    // TODO: Implement social login with backend (not in current scope)
  }
}
