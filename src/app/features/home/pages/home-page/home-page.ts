import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { PromoGridComponent } from '../../components/promo-grid/promo-grid';
import { ProductListComponent } from '../../components/product-list/product-list';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    PromoGridComponent,
    ProductListComponent,
    ScrollToTopComponent,
  ],
  templateUrl: './home-page.html',
})
export class HomePageComponent {

}
