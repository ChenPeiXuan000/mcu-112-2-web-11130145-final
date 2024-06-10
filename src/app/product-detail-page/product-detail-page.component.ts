import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  productName: string;
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.paramMap.get('name');
    this.productName = name ? name.replace(/-/g, ' ') : '';
  }
}
