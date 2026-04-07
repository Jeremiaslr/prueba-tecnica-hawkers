import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() productSelected = new EventEmitter<Product>();

  get imageUrl(): string {
    return this.product.images?.[0] || 'assets/images/product-placeholder.png';
  }

  get formattedTitle(): string {
    return this.product.title.toUpperCase();
  }

  get formattedPrice(): string {
    return `${Math.round(this.product.price)}€`;
  }

  onSelectProduct(): void {
    this.productSelected.emit(this.product);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/product-placeholder.png';
  }
}
