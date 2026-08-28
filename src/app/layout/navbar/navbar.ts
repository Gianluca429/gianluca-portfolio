import { Component, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnDestroy {
  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    const nextState = !this.isMenuOpen();

    this.isMenuOpen.set(nextState);
    this.updateBodyScroll(nextState);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    this.updateBodyScroll(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  ngOnDestroy(): void {
    this.updateBodyScroll(false);
  }

  private updateBodyScroll(locked: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.style.overflow = locked ? 'hidden' : '';
  }
}
