import { Component, HostListener, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { Background } from './background/background';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { SkillCloud } from './skill-cloud/skill-cloud';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Background, Header, Hero, SkillCloud, Projects, Experience, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  @ViewChild('cursorFollower') cursorFollower!: ElementRef;
  protected readonly title = signal('portfolio');
  showScrollToTop = false;

  private xTo: any;
  private yTo: any;

  ngAfterViewInit() {
    if (this.cursorFollower) {
      // Use GSAP quickTo for highly optimized, modern trailing cursor effect
      this.xTo = gsap.quickTo(this.cursorFollower.nativeElement, "x", { duration: 0.5, ease: "power3" });
      this.yTo = gsap.quickTo(this.cursorFollower.nativeElement, "y", { duration: 0.5, ease: "power3" });
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.xTo && this.yTo) {
      // Offset by half the cursor size (15px) so the cursor is centered on the real mouse
      this.xTo(e.clientX - 15);
      this.yTo(e.clientY - 15);
    }
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    if (this.cursorFollower) {
      gsap.to(this.cursorFollower.nativeElement, { scale: 0.7, duration: 0.2 });
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.cursorFollower) {
      gsap.to(this.cursorFollower.nativeElement, { scale: 1, duration: 0.4, ease: "back.out(1.7)" });
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Show back-to-top button after scrolling down 500px
    this.showScrollToTop = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
