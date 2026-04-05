import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
