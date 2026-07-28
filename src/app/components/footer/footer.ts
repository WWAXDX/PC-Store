import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  private langService = inject(LanguageService);
  private authService = inject(AuthService);
  private router = inject(Router);

  t = (key: string) => this.langService.t(key);
  isLoggedIn = computed(() => this.authService.isLoggedIn());
  isAdmin = computed(() => this.authService.isAdmin());

  categories = [
    { key: 'pc-parts', label: 'nav.pcParts' },
    { key: 'monitors', label: 'nav.monitors' },
    { key: 'chairs', label: 'nav.chairs' },
    { key: 'accessories', label: 'nav.accessories' }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
