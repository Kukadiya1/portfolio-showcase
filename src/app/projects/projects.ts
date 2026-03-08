import { Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements AfterViewInit {
  projects = [
    {
      title: 'Lifemaan',
      description: 'A comprehensive SaaS healthcare platform designed to digitize and streamline the end-to-end patient journey, integrating disparate hospital workflows into a unified digital ecosystem.',
      features: [
        'Lead Frontend Developer for integrated OPD/IPD booking flows, significantly reducing registration and discharge times.',
        'Developed a dynamic multi-department form engine to handle diverse medical documentation and specialized needs.',
        'Implemented real-time synchronization for patient status tracking and IPD sheet updates using RxJS and Socket.io.',
        'Architected scalable UI components that manage complex healthcare data across various medical modules.'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Socket.IO', 'SCSS', 'Bootstrap'],
      link: 'https://lifemaan.com/'
    },
    {
      title: 'ScoreConnect',
      description: 'An advanced iGaming engagement CRM designed to boost user retention through real-time data visualization and automated social interaction features.',
      features: [
        'Developed real-time "Live Board" widgets with Socket.io, providing users with instantaneous betting tips and updates.',
        'Engineered a configurable bot and tipster management module using RxJS to automate user engagement workflows.',
        'Integrated high-performance data visualization using Konva.js for interactive live boards and betting trends.',
        'Implemented real-time communication features using the ZEGO WebRTC SDK to enhance social interactions.'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Socket.IO', 'Konva.js', 'ZEGO WebRTC SDK', 'SCSS', 'Bootstrap'],
      link: 'http://scoreconnect.com'
    },
    {
      title: 'BollyGaming',
      description: 'A feature-rich iGaming platform delivering a seamless betting experience, handling high-volume transactions and real-time odds updates through a robust integrated frontend.',
      features: [
        'Built a comprehensive administrative control panel for full-system configuration, game management, and user auditing.',
        'Optimized client-side bet placement logic for performance and reliability in a high-concurrency betting environment.',
        'Developed real-time odds dashboards using ApexCharts and Socket.io to provide dynamic market data to users.',
        'Engineered a scalable frontend architecture that maintains responsiveness under heavy user traffic and data refreshes.'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'ApexCharts', 'Socket.IO', 'SCSS', 'Bootstrap']
    },
    {
      title: 'teameto',
      description: 'A sophisticated B2B e-commerce platform streamlining optical product procurement for Canadian optometrists and retailers, simplifying complex eyewear configurations.',
      features: [
        'Architected the frontend using Angular and RxJS to handle complex product modeling and multi-step ordering processes.',
        'Engineered a high-performance administration dashboard for dynamic product catalog management and inventory tracking.',
        'Implemented a responsive UI with SCSS and Bootstrap, ensuring seamless cross-device compatibility for B2B users.',
        'Integrated multi-role access control and streamlined order tracking to improve operational efficiency.'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap'],
      link: 'https://www.teameto.com/'
    },
    {
      title: 'Sail (Bokaro Steel)',
      description: 'A mission-critical enterprise safety management platform for a major steel plant, digitizing incident reporting and root-cause analysis to enhance workplace security.',
      features: [
        'Engineered a robust "5 Why" root-cause analysis module to systematically track and mitigate industrial safety risks.',
        'Designed and implemented secure, role-based user management for thousands of plant employees and safety officers.',
        'Developed comprehensive reporting dashboards to visualize safety trends and incident mitigation progress.',
        'Focused on building a highly reliable and scalable UI capable of handling extensive enterprise data sets.'
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Bootstrap']
    },
    {
      title: 'Copy Order (Fyers API)',
      description: 'A high-performance fintech solution for automated trade replication, integrating with the Fyers API to execute synchronized trades with millisecond precision.',
      features: [
        'Developed a real-time trading dashboard using Angular and RxJS for instantaneous trade monitoring and execution.',
        'Implemented a scalable backend with Node.js and MongoDB to manage multi-user trade synchronization and symbol mapping.',
        'Engineered account-specific multiplier and risk management logic to ensure accurate trade scaling across diverse portfolios.',
        'Optimized API communication to minimize latency, critical for high-stakes algorithmic trading environments.'
      ],
      techStack: ['Angular', 'Node.js', 'Express', 'MongoDB', 'RxJS', 'Fyers API', 'SCSS', 'Bootstrap']
    }
  ];

  ngAfterViewInit() {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
}
