import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  isLoginMode = signal(true);
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  fullName = signal('');
  loading = signal(false);
  error = signal('');
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  
  private langService = inject(LanguageService);
  t = (key: string) => this.langService.t(key);

  constructor(private router: Router) {}

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

  async onSubmit() {
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

    try {
      if (this.isLoginMode()) {
        // TODO: Replace with your backend API call
        await this.loginUser({
          email: this.email(),
          password: this.password()
        });
      } else {
        // TODO: Replace with your backend API call
        await this.registerUser({
          fullName: this.fullName(),
          email: this.email(),
          password: this.password()
        });
      }

      // On success, navigate to home
      this.router.navigate(['/']);
    } catch (err: any) {
      this.error.set(err.message || 'An error occurred. Please try again.');
    } finally {
      this.loading.set(false);
    }
  }

  // TODO: Replace with actual API call
  private async loginUser(credentials: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API call
        console.log('Login credentials:', credentials);
        resolve({ success: true });
        // To simulate error: reject(new Error('Invalid credentials'));
      }, 1500);
    });
  }

  // TODO: Replace with actual API call
  private async registerUser(userData: { fullName: string; email: string; password: string }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API call
        console.log('Register data:', userData);
        resolve({ success: true });
        // To simulate error: reject(new Error('Email already exists'));
      }, 1500);
    });
  }

  socialLogin(provider: string) {
    console.log(`Social login with ${provider}`);
    // TODO: Implement social login
  }
}
