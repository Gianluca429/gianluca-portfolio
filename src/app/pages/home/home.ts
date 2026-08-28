import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';

import { SeoService } from '../../services/seo.service';
import { Navbar } from '../../layout/navbar/navbar';
import { PORTFOLIO_PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-home',
  imports: [Navbar, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly projects = PORTFOLIO_PROJECTS;

  private readonly seoService = inject(SeoService);

  constructor() {
    this.seoService.update({
      title: 'Gianluca Guarino | Front-end Developer',
      description:
        'Front-end Developer specializzato nella progettazione e sviluppo di siti web, portfolio e interfacce moderne con Angular, TypeScript e SCSS.',
      canonical: 'https://gianlucaguarino.it/',
      image: 'https://gianlucaguarino.it/images/og-portfolio.jpg',
    });
  }
}
