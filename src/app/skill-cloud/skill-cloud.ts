import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-skill-cloud',
  imports: [],
  templateUrl: './skill-cloud.html',
  styleUrl: './skill-cloud.scss'
})
export class SkillCloud implements AfterViewInit {
  skills = [
    // Frontend
    { name: 'Angular', level: 'Expert' },
    { name: 'TypeScript', level: 'Expert' },
    { name: 'RxJS', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Advanced' },

    // Backend & Database
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },

    // Real-time
    { name: 'Socket.IO', level: 'Advanced' },
    { name: 'WebRTC', level: 'Advanced' },

    // Animation & 3D
    { name: 'GSAP', level: 'Intermediate' },
    // { name: 'Three.js', level: 'Intermediate' },
  ];

  ngAfterViewInit() {
    gsap.from('.skill-card', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)',
    });

    const cards = gsap.utils.toArray<HTMLElement>('.skill-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });
  }
}
