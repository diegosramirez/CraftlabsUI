import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.apiService.getProducts().subscribe((response: Product[]) => {
      this.products = response;
    });
  }
}
