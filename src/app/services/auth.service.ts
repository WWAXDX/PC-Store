import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AuthUser {
  fullName: string;
  email: string;
  role: string;
}

interface AuthResponse {
  token: string;
  fullName: string;
  email: string;
  role: string;
}

const STORAGE_KEY = 'auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private apiUrl = `${environment.apiUrl}/auth`;

  private token = signal<string | null>(null);

  currentUser = signal<AuthUser | null>(null);
  isLoggedIn = computed(() => this.currentUser() !== null);
  isAdmin = computed(() => this.currentUser()?.role === 'Admin');

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
      tap(res => this.persistSession(res.token, { fullName: res.fullName, email: res.email, role: res.role })),
      map(res => ({ fullName: res.fullName, email: res.email, role: res.role })),
      catchError(this.handleAuthError)
    );
  }

  login(email: string, password: string): Observable<AuthUser> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(res => this.persistSession(res.token, { fullName: res.fullName, email: res.email, role: res.role })),
      map(res => ({ fullName: res.fullName, email: res.email, role: res.role })),
      catchError(this.handleAuthError)
    );
  }

  updateProfile(fullName: string): Observable<AuthUser> {
    return this.http.put<AuthResponse>(`${this.apiUrl}/profile`, { fullName }).pipe(
      tap(res => {
        const token = this.token() ?? res.token;
        this.persistSession(token || res.token, {
          fullName: res.fullName,
          email: res.email,
          role: res.role
        });
      }),
      map(res => ({ fullName: res.fullName, email: res.email, role: res.role })),
      catchError(this.handleAuthError)
    );
  }

  changePassword(currentPassword: string, newPassword: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/password`, { currentPassword, newPassword }).pipe(
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
