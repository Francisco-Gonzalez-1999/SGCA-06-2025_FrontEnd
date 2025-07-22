import {
  Component,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  QueryList
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss'],
  animations: [
    trigger('fadeInUp', [
      state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('hidden => visible', animate('1s ease-out'))
    ]),
    trigger('fadeInLeft', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('800ms ease-out'))
    ]),
    trigger('fadeInRight', [
      state('hidden', style({ opacity: 0, transform: 'translateX(30px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('800ms ease-out'))
    ]),
    trigger('scaleIn', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', animate('600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]
})
export class AboutUsSectionComponent implements AfterViewInit {
  @ViewChildren('animateOnScroll') animatedElements!: QueryList<ElementRef>;
  visibilityStates: Map<Element, 'hidden' | 'visible'> = new Map();

  stats = [
    { value: '500+', label: 'Clientes satisfechos' },
    { value: '1000+', label: 'Autos vendidos' },
    { value: '50+', label: 'Marcas disponibles' }
  ];

  features = [
    {
      icon: 'pi pi-shield',
      title: 'Garantía extendida',
      description: 'Todos nuestros autos cuentan con garantía de motor y transmisión.'
    },
    {
      icon: 'pi pi-money-bill',
      title: 'Financiamiento',
      description: 'Ofrecemos opciones de financiamiento flexibles y accesibles.'
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const element = entry.target;
        this.visibilityStates.set(element, entry.isIntersecting ? 'visible' : 'hidden');
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    this.animatedElements.forEach(el => {
      this.visibilityStates.set(el.nativeElement, 'hidden');
      observer.observe(el.nativeElement);
    });
  }

  getState(element: HTMLElement): 'hidden' | 'visible' {
    return this.visibilityStates.get(element) || 'hidden';
  }
}
