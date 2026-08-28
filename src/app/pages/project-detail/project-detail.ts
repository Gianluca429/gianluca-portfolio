import { Component, computed, effect, inject } from '@angular/core';

import { ActivatedRoute, RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { PORTFOLIO_PROJECTS } from '../../data/projects.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly seoService = inject(SeoService);

  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: null,
  });

  readonly project = computed(() => {
    const slug = this.slug();

    return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
  });

  readonly projectNumber = computed(() => {
    const currentProject = this.project();

    if (!currentProject) {
      return '00';
    }

    const index = PORTFOLIO_PROJECTS.findIndex((project) => project.slug === currentProject.slug);

    return String(index + 1).padStart(2, '0');
  });

  readonly nextProject = computed(() => {
    const currentProject = this.project();

    if (!currentProject) {
      return undefined;
    }

    const currentIndex = PORTFOLIO_PROJECTS.findIndex(
      (project) => project.slug === currentProject.slug,
    );

    const nextIndex = (currentIndex + 1) % PORTFOLIO_PROJECTS.length;

    return PORTFOLIO_PROJECTS[nextIndex];
  });

  constructor() {
    effect(() => {
      const project = this.project();
      const slug = this.slug();

      if (!slug) {
        return;
      }

      if (!project) {
        this.seoService.update({
          title: 'Progetto non trovato | Gianluca Guarino',
          description: 'Il progetto richiesto non è disponibile nel portfolio di Gianluca Guarino.',
          canonical: `https://gianlucaguarino.it/projects/${slug}`,
        });

        return;
      }

      this.seoService.update({
        title: `${project.name} | Gianluca Guarino`,
        description: project.description,
        canonical: `https://gianlucaguarino.it/projects/${project.slug}`,
        image: `https://gianlucaguarino.it/${project.image}`,
      });
    });
  }

  formatIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  scrollToTop(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
