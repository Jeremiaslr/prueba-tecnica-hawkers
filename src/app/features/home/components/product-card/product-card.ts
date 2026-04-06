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

  get imageUrl(): string {
    return this.product.images?.[0] || 'assets/images/product-placeholder.png';
  }

  get formattedTitle(): string {
    return this.product.title.toUpperCase();
  }

  get formattedPrice(): string {
    return `${Math.round(this.product.price)}€`;
  }
}
