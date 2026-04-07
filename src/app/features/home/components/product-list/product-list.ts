import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductsService } from '../../../../core/services/products.service';
import { ProductCardComponent } from '../product-card/product-card';
import { ProductModalComponent } from '../product-modal/product-modal';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductModalComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {
  private readonly productsService = inject(ProductsService);

  selectedProduct: Product | null = null;

  // TODO: Sustituir el slice(0, 6) temporal por una lógica de carga progresiva.
  // La implementación final deberá renderizar más productos por bloques cuando el usuario llegue al final de la página (scroll infinito / lazy load).
  readonly products$ = this.productsService.getProducts().pipe(
    map((products: Product[]) => products.slice(0, 6))
  );

  openProductModal(product: Product): void {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeProductModal(): void {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }
}