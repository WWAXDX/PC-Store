import { Component, ChangeDetectionStrategy, inject, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-account',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './account.html',
  styleUrl: './account.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Account implements OnInit {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

  t = (k: string) => this.lang.t(k);
  user = this.auth.currentUser;
  profileMsg = signal('');
  profileErr = signal('');
  passMsg = signal('');
  passErr = signal('');
  savingProfile = signal(false);
  savingPass = signal(false);

  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]]
  });

  passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });

  ngOnInit() {
    this.seo.setPage('My Account', 'Manage your PC Parts Store account.');
    this.profileForm.patchValue({ fullName: this.user()?.fullName || '' });
  }

  saveProfile() {
    this.profileForm.markAllAsTouched();
    if (this.profileForm.invalid) return;
    this.savingProfile.set(true);
    this.profileMsg.set('');
    this.profileErr.set('');
    this.auth.updateProfile(this.profileForm.value.fullName!.trim()).subscribe({
      next: () => {
        this.savingProfile.set(false);
        this.profileMsg.set(this.t('account.profileSaved'));
      },
      error: (e) => {
        this.savingProfile.set(false);
        this.profileErr.set(e.message || this.t('common.loadError'));
      }
    });
  }

  savePassword() {
    this.passwordForm.markAllAsTouched();
    if (this.passwordForm.invalid) return;
    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;
    if (newPassword !== confirmPassword) {
      this.passErr.set(this.t('account.passwordMismatch'));
      return;
    }
    this.savingPass.set(true);
    this.passMsg.set('');
    this.passErr.set('');
    this.auth.changePassword(currentPassword!, newPassword!).subscribe({
      next: () => {
        this.savingPass.set(false);
        this.passMsg.set(this.t('account.passwordSaved'));
        this.passwordForm.reset();
      },
      error: (e) => {
        this.savingPass.set(false);
        this.passErr.set(e.message || this.t('common.loadError'));
      }
    });
  }
}
