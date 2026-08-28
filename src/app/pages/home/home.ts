import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
