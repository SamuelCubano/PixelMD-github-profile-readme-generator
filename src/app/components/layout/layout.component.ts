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
          <a href="#" class="nav-link">Inicio</a>
          <a href="https://icons-samuel.netlify.app/" target="_blank" class="nav-link">Samuel Icons</a>
        </nav>
        <div class="nav-utils">
          <button class="icon-btn" (click)="toggleTheme()" title="Cambiar modo">
            <i [attr.data-lucide]="theme() === 'dark' ? 'sun' : 'moon'"></i>
          </button>
        </div>
      </div>
    </header>

    <div class="repo-banner">
      <div class="banner-content">
        <i data-lucide="star" class="star-icon"></i>
        <span>¿Te gusta PixelMD? <a href="https://github.com/tu-usuario/tu-repo" target="_blank">Apóyanos con una estrella en GitHub</a></span>
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