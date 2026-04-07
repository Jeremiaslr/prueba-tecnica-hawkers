import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss',
})
export class ProductModalComponent {
  @Input({ required: true }) product!: Product;
  @Output() closeModal = new EventEmitter<void>();

  zoomed = false;
  zoomOrigin = '50% 50%';
  fallbackImage = 'assets/images/product-placeholder.png';

  get imageUrl(): string {
    return this.product.images?.[0] || this.fallbackImage;
  }

  get formattedPrice(): string {
    return `${Math.round(this.product.price)}€`;
  }

  close(): void {
    this.closeModal.emit();
  }

  toggleZoom(): void {
    this.zoomed = !this.zoomed;

    if (!this.zoomed) {
      this.zoomOrigin = '50% 50%';
    }
  }

  onImageMouseMove(event: MouseEvent): void {
    if (!this.zoomed) return;

    const target = event.target as HTMLImageElement;
    const rect = target.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    this.zoomOrigin = `${x}% ${y}%`;
  }

  onImageMouseLeave(): void {
    if (!this.zoomed) return;
    this.zoomOrigin = '50% 50%';
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = this.fallbackImage;
  }

  onOverlayClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePressed(): void {
    this.close();
  }
}