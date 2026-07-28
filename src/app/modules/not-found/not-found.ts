import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="not-found-page">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1>{{ t('notFound.title') }}</h1>
        <p>{{ t('notFound.description') }}</p>
        <a routerLink="/home" class="back-home-btn">
          <i class="bi bi-house-door"></i>
          {{ t('notFound.backHome') }}
        </a>
      </div>
    </div>
  `,
  styles: [`
    .not-found-page {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      text-align: center;
      /* Extra top padding clears the fixed navbar */
      padding: 140px 2rem 4rem;
    }
    .error-code {
      font-size: 6rem;
      font-weight: 800;
      background: var(--brand-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
    }
    h1 {
      font-size: 1.5rem;
      margin: 1rem 0 0.5rem;
      color: var(--text-primary);
    }
    p {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }
    .back-home-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--brand-gradient);
      color: white;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s;
    }
    .back-home-btn:hover {
      transform: translateY(-2px);
    }
  `]
})
export class NotFound {
  private langService = inject(LanguageService);
  t = (key: string) => this.langService.t(key);
}
