import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  productName: string;

  products: Product | undefined;

  constructor(private route: ActivatedRoute) {
    const name = this.route.snapshot.paramMap.get('name');
    this.productName = name ? name.replace(/-/g, ' ') : '';
  }

  product = new Product({
    name: 'A 產品',
    authors: ['作者A、作者B、作者C'],
    company: '博碩文化',
    imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 1580,
  });

  private router = inject(Router);

  onBack(): void {
    this.router.navigate(['products']);
  }
}
