import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  products = [
    new Product({
      name: 'A 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'B 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'C 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
    new Product({
      name: 'D 產品',
      authors: ['作者A、作者B、作者C'],
      company: '博碩文化',
      imgUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 1580,
    }),
  ];
}
