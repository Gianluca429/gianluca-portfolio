import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  update(config: SeoConfig): void {
    this.titleService.setTitle(config.title);

    this.metaService.updateTag({
      name: 'description',
      content: config.description,
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: config.title,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: config.description,
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: config.canonical,
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });

    if (config.image) {
      this.metaService.updateTag({
        property: 'og:image',
        content: config.image,
      });
    }

    this.setCanonical(config.canonical);
  }

  private setCanonical(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }
}
