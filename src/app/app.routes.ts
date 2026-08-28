import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProjectDetail } from './pages/project-detail/project-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Gianluca Guarino | Front-end Developer',
  },
  {
    path: 'projects/:slug',
    component: ProjectDetail,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
