import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience implements AfterViewInit {
  experiences = [
    {
      role: 'Frontend Developer',
      company: 'Lifemaan Private Limited',
      duration: 'Present',
      description: 'Building high-performance SaaS applications and interactive dashboards utilizing Angular, RxJS, and modern state management techniques.'
    },
    {
      role: 'Frontend Developer',
      company: 'Keypress IT Services',
      duration: 'Previous',
      description: 'Developed and maintained various complex web applications, focusing on scalability, component reusability, and responsive design.'
    }
  ];

  ngAfterViewInit() {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }
}
