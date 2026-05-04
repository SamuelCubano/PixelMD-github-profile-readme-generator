import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  template: `
    <header class="navbar glass">
      <div class="nav-container">
        <div class="logo" (click)="reload()">Pixel<span>MD</span></div>
        <nav class="nav-menu">
          <a href="/" class="nav-link">Home</a>
          <a href="https://icons-samuel.netlify.app/" target="_blank" class="nav-link">Samuel Icons</a>
        </nav>
        <div class="nav-utils">
          <button class="icon-btn" (click)="toggleTheme()" [title]="theme() === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            @if (theme() === 'dark') {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
        </div>
      </div>
    </header>

    <div class="repo-banner">
      <div class="banner-content">
        <i data-lucide="star" class="star-icon"></i>
        <span>Love PixelMD? <a href="https://github.com/SamuelCubano/PixelMD-github-profile-readme-generator" target="_blank">Give us a star on GitHub</a></span>
      </div>
    </div>
  `,
})
export class LayoutComponent {
  private profileService = inject(ProfileService);
  theme = this.profileService.theme;

  toggleTheme() {
    this.profileService.toggleTheme();
  }

  reload() {
    location.reload();
  }
}