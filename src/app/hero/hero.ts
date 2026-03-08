import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {

  get yearsOfExperience(): number {
    const startDate = new Date('2023-01-01');
    const today = new Date();
    // Calculate difference in milliseconds, then convert to years
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    // Use Math.floor to only count fully completed years, or Math.round if they prefer closer rounding.
    // Given 2023-01-01 and it is currently 2026, we will floor it so it says "3 Years".
    return Math.floor(diffYears);
  }

  ngAfterViewInit() {
    gsap.from('.hero-card', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.1
    });

    gsap.from('.headline', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.3
    });

    gsap.from('.subtext', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.5
    });

    gsap.from('.btn', {
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      delay: 0.7
    });
  }
}
