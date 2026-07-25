import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthUser {
  fullName: string;
  email: string;
}

interface AuthResponse {
  token: string;
  fullName: string;
  email: string;
}

const STORAGE_KEY = 'auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private apiUrl = `${environment.apiUrl}/auth`;

  private token = signal<string | null>(null);

  // Currently logged-in user, or null when logged out. Components read this signal
  // (or isLoggedIn below) to reflect auth state in the UI (e.g. navbar).
  currentUser = signal<AuthUser | null>(null);
  isLoggedIn = computed(() => this.currentUser() !== null);

  constructor() {
    this.restoreSession();
  }

  private restoreSession() {
    if (!isPlatformBrowser(this.platformId)) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as { token: string; user: AuthUser };
      this.token.set(parsed.token);
      this.currentUser.set(parsed.user);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  private persistSession(token: string, user: AuthUser) {
    this.token.set(token);
    this.currentUser.set(user);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ token, user }));
    }
  }

  register(fullName: string, email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { fullName, email, password }).pipe(
      tap(res => this.persistSession(res.token, { fullName: res.fullName, email: res.email })),
      map(res => ({ fullName: res.fullName, email: res.email })),
      catchError(this.handleAuthError)
    );
  }

  login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => this.persistSession(res.token, { fullName: res.fullName, email: res.email })),
      map(res => ({ fullName: res.fullName, email: res.email })),
      catchError(this.handleAuthError)
    );
  }

  logout() {
    this.token.set(null);
    this.currentUser.set(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  getToken(): string | null {
    return this.token();
  }

  private handleAuthError(error: any) {
    const message = error?.error?.message || 'Something went wrong. Please try again.';
    return throwError(() => new Error(message));
  }
}
