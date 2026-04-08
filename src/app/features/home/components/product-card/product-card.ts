import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  signal,
} from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './product-card.html',
})
export class ProductCardComponent implements OnChanges {
  @Input({ required: true }) product!: Product;
  @Output() productSelected = new EventEmitter<Product>();

  protected readonly imageLoading = signal(true);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.imageLoading.set(true);
    }
  }

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

  onImageLoad(): void {
    this.imageLoading.set(false);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img.src.includes('product-placeholder.png')) {
      this.imageLoading.set(false);
      return;
    }
    img.src = 'assets/images/product-placeholder.png';
  }
}
