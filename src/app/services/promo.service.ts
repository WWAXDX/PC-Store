import { Injectable } from '@angular/core';

export type PromoType = 'percent' | 'fixed';

export interface PromoResult {
  code: string;
  type: PromoType;
  value: number;
  discount: number;
}

const CODES: Record<string, { type: PromoType; value: number }> = {
  PC10: { type: 'percent', value: 10 },
  WELCOME15: { type: 'percent', value: 15 },
  SAVE25: { type: 'fixed', value: 25 }
};

@Injectable({ providedIn: 'root' })
export class PromoService {
  /** Known demo codes shown as a hint on cart/checkout. */
  hintCodes = ['PC10', 'WELCOME15', 'SAVE25'];

  apply(code: string | null | undefined, subtotal: number): PromoResult | null {
    if (!code?.trim()) return null;
    const normalized = code.trim().toUpperCase();
    const rule = CODES[normalized];
    if (!rule) return null;

    const discount =
      rule.type === 'percent'
        ? Math.round(subtotal * (rule.value / 100) * 100) / 100
        : Math.min(rule.value, subtotal);

    return { code: normalized, type: rule.type, value: rule.value, discount };
  }
}
