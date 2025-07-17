import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-section',
  imports: [
    ButtonModule,
    RippleModule
  ],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
  animations: [
    trigger('textAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(-100px)'
      })),
      transition('void => *', [
        animate('1s 0.3s ease-out')
      ])
    ]),
    trigger('imageAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(100px)'
      })),
      transition('void => *', [
        animate('1s 0.6s ease-out')
      ])
    ])
  ]
})
export class HomeSectionComponent implements OnInit {
dots: any[] = [];

  ngOnInit() {
    this.generateDots();
  }

  generateDots() {
    // Genera partículas decorativas
    for (let i = 0; i < 20; i++) {
      this.dots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 10 + 5
      });
    }
  }
}
