import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { take } from 'rxjs';
import { Product } from '../../../../core/models/product.model';
import { ProductsService } from '../../../../core/services/products.service';
import { ProductCardComponent } from '../product-card/product-card';
import { ProductModalComponent } from '../product-modal/product-modal';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductModalComponent],
  templateUrl: './product-list.html',
})
export class ProductListComponent implements AfterViewInit, OnDestroy {
  private readonly productsService = inject(ProductsService);
  private readonly ngZone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly batchSize = 10;
  visibleCount = this.batchSize;
  private intersectionObserver: IntersectionObserver | null = null;
  private scrollAnchorElement: HTMLDivElement | null = null;
  private isLoadingBatch = false;
  private totalProducts = 0;

  @ViewChild('scrollAnchor')
  set scrollAnchor(element: ElementRef<HTMLDivElement> | undefined) {
    if (this.scrollAnchorElement && this.intersectionObserver) {
      this.intersectionObserver.unobserve(this.scrollAnchorElement);
    }

    this.scrollAnchorElement = element?.nativeElement ?? null;
    if (!this.scrollAnchorElement || !this.intersectionObserver) {
      return;
    }

    this.intersectionObserver.observe(this.scrollAnchorElement);
  }

  selectedProduct: Product | null = null;
  readonly products$ = this.productsService.getProducts();

  constructor() {
    this.productsService.getProducts().pipe(take(1)).subscribe((products) => {
      this.totalProducts = products.length;
    });
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (!entry.isIntersecting || this.isLoadingBatch) {
          return;
        }

        if (this.visibleCount >= this.totalProducts) {
          return;
        }

        this.isLoadingBatch = true;
        this.intersectionObserver?.unobserve(entry.target);

        this.ngZone.run(() => {
          this.visibleCount = Math.min(
            this.visibleCount + this.batchSize,
            this.totalProducts
          );
          this.cdr.detectChanges();
        });

        requestAnimationFrame(() => {
          this.isLoadingBatch = false;
          if (
            this.scrollAnchorElement &&
            this.intersectionObserver &&
            this.visibleCount < this.totalProducts
          ) {
            this.intersectionObserver.observe(this.scrollAnchorElement);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 1,
      }
    );

    if (this.scrollAnchorElement) {
      this.intersectionObserver.observe(this.scrollAnchorElement);
    }
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }

  openProductModal(product: Product): void {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeProductModal(): void {
    this.selectedProduct = null;
    document.body.style.overflow = '';
  }

  hasMoreProducts(totalProducts: number): boolean {
    return this.visibleCount < totalProducts;
  }
}