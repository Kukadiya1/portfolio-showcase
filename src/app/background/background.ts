import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener, inject, effect } from '@angular/core';
import * as THREE from 'three';
import { ThemeService } from '../services/theme';

@Component({
  selector: 'app-background',
  imports: [],
  templateUrl: './background.html',
  styleUrl: './background.scss'
})
export class Background implements AfterViewInit, OnDestroy {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private material!: THREE.PointsMaterial;
  private animationId: number = 0;

  private mouseX = 0;
  private mouseY = 0;
  private targetX = 0;
  private targetY = 0;
  private windowHalfX = window.innerWidth / 2;
  private windowHalfY = window.innerHeight / 2;

  themeService = inject(ThemeService);

  constructor() {
    // React to theme changes
    effect(() => {
      if (this.material) {
        const isDark = this.themeService.isDarkMode();
        const lightModeColor = 0x0284c7;
        const darkModeColor = 0x64ffda;

        this.material.color.setHex(isDark ? darkModeColor : lightModeColor);
        this.material.size = isDark ? 2 : 3;
        this.material.opacity = isDark ? 0.6 : 0.8;
        this.material.needsUpdate = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.initThreeJs();
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initThreeJs(): void {
    const container = this.canvasContainer.nativeElement;

    // Scene setup
    this.scene = new THREE.Scene();

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    // Particles setup
    const particleCount = 3000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create a circular texture map for the particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext('2d');
    if (context) {
      context.beginPath();
      context.arc(8, 8, 8, 0, Math.PI * 2);
      context.fillStyle = '#ffffff';
      context.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    // For light mode, use a deeper, more vibrant blue/teal to ensure they stand out against the white background.
    const isDark = this.themeService.isDarkMode();
    const lightModeColor = 0x0284c7; // vibrant blue from styles.scss --text-accent
    const darkModeColor = 0x64ffda;  // cyan

    this.material = new THREE.PointsMaterial({
      size: isDark ? 2 : 3, // slightly larger particles in light mode
      color: isDark ? darkModeColor : lightModeColor,
      map: texture,
      transparent: true,
      opacity: isDark ? 0.6 : 0.8, // higher opacity in light mode
      sizeAttenuation: true,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, this.material);
    this.scene.add(this.particles);

    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(this.renderer.domElement);
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);
    this.render();
  }

  private render() {
    // Smooth camera movement based on mouse position
    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
    this.camera.lookAt(this.scene.position);

    // Slow continuous rotation
    this.particles.rotation.x += 0.0005;
    this.particles.rotation.y += 0.001;

    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX - window.innerWidth / 2;
    this.mouseY = event.clientY - window.innerHeight / 2;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
}
