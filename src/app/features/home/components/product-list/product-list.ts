import { Component } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

//TODO: implement real products
export class ProductListComponent {
    products: Product[] = [
    {
      id: '1',
      title: 'Sample Product 1',
      description: 'Sample product description',
      price: 44.99,
      images: [],
      availability: true,
    },
    {
      id: '2',
      title: 'Sample Product 2',
      description: 'Sample product description',
      price: 59.99,
      images: [],
      availability: true,
    },
    {
      id: '3',
      title: 'Sample Product 3',
      description: 'Sample product description',
      price: 39.99,
      images: [],
      availability: false,
    },
  ];
}
