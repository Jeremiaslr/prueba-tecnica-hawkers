import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductsService } from '../../../../core/services/products.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductListComponent {
  private readonly productsService = inject(ProductsService);
  // TODO: Sustituir el slice(0, 6) temporal por una lógica de carga progresiva.
  // La implementación final deberá renderizar más productos por bloques cuando el usuario llegue al final de la página (scroll infinito / lazy load).
  readonly products$ = this.productsService.getProducts().pipe(
    map((products: Product[]) => products.slice(0, 6))
  );
}