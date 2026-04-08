import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  templateUrl: './scroll-to-top.html',
})
export class ScrollToTopComponent implements AfterViewInit {
  private readonly document = inject(DOCUMENT);

  private readonly breakpointSm = 640;

  private readonly breakpointLg = 1024;

  protected readonly visible = signal(false);

  ngAfterViewInit(): void {
    this.updateVisibility();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateVisibility();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateVisibility();
  }

  scrollToTop(): void {
    this.document.defaultView?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private updateVisibility(): void {
    const y = this.document.defaultView?.scrollY ?? 0;
    const w = this.document.defaultView?.innerWidth ?? 0;
    this.visible.set(y > this.thresholdForViewportWidth(w));
  }

  private thresholdForViewportWidth(width: number): number {
    if (width < this.breakpointSm) {
      return 600;
    }
    if (width < this.breakpointLg) {
      return 500;
    }
    return 400;
  }
}
