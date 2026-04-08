import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  standalone: true,
  templateUrl: './spinner.html',
})
export class SpinnerComponent {
  @Input() ariaLabel = 'Cargando';
  /** Tamaño visual: sm ~24px, md ~32px */
  @Input() size: 'sm' | 'md' = 'md';
}
