import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5100/api';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer MockToken`);
    const url = `${this.apiUrl}/product`;
    return this.http.get<Product[]>(url, { headers });
  }
}
