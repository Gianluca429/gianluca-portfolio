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
      title: 'Realizzazione siti web a Napoli | Gianluca Guarino',
      description:
        "Realizzo siti web su misura a Napoli per professionisti e piccole attività. Design, sviluppo responsive e confronto diretto, dall'idea alla pubblicazione.",
      canonical: 'https://gianlucaguarino.it/',
      image: 'https://gianlucaguarino.it/images/og-portfolio.jpg',
    });
  }
}
