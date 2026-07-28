import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Review {
  id: number;
  productId: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ReviewSummary {
  averageRating: number;
  count: number;
  reviews: Review[];
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/products`;

  getReviews(productId: number): Observable<ReviewSummary> {
    return this.http.get<ReviewSummary>(`${this.apiUrl}/${productId}/reviews`);
  }

  addReview(productId: number, rating: number, comment: string): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}/${productId}/reviews`, { rating, comment });
  }

  deleteReview(productId: number, reviewId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${productId}/reviews/${reviewId}`);
  }
}
