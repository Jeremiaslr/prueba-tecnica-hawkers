import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;

    if (!video) return;

    video.muted = true;
    video.play().catch(() => {
      // Chrome u otros navegadores pueden bloquear la reproducción automática.
      // En ese caso, el usuario seguirá viendo el poster y podrá reproducir el vídeo manualmente.
    });
  }

}
