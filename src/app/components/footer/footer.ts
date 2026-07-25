import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  private langService = inject(LanguageService);
  t = (key: string) => this.langService.t(key);
}
