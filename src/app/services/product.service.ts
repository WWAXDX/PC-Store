import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  // True whenever the most recent API call failed (e.g. backend down). Components can
  // read this to show a real error message to the user instead of failing silently.
  apiError = signal(false);

  constructor(private http: HttpClient) {}

  // Get all products from API
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('getAllProducts', []))
    );
  }

  // Get product by ID from API
  getProductById(id: number): Observable<Product | undefined> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product | undefined>('getProductById', undefined))
    );
  }

  // Get products by category from API
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?category=${category}`).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('getProductsByCategory', []))
    );
  }

  // Get products by subcategory from API
  getProductsBySubCategory(subCategory: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?category=${subCategory}`).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('getProductsBySubCategory', []))
    );
  }

  // Filter products by category or subcategory from API
  filterProducts(category: string | null): Observable<Product[]> {
    if (!category) {
      return this.getAllProducts();
    }
    return this.http.get<Product[]>(`${this.apiUrl}?category=${category}`).pipe(
      tap(() => this.apiError.set(false)),
      catchError(this.handleError<Product[]>('filterProducts', []))
    );
  }

  // Group products by subcategory
  groupBySubCategory(products: Product[]): { [key: string]: Product[] } {
    const grouped: { [key: string]: Product[] } = {};
    products.forEach(product => {
      const subCat = product.subCategory;
      if (!grouped[subCat]) {
        grouped[subCat] = [];
      }
      grouped[subCat].push(product);
    });
    return grouped;
  }

  // Centralized error handling so the UI doesn't fail silently when the API is down
  private handleError<T>(operation: string, fallbackValue: T) {
    return (error: unknown): Observable<T> => {
      console.error(`ProductService.${operation} failed:`, error);
      this.apiError.set(true);
      return of(fallbackValue);
    };
  }
}
