import { Component, afterNextRender, inject } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { LayoutComponent } from './components/layout/layout.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { FooterComponent } from './components/layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, WizardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private profileService = inject(ProfileService);

  constructor() {
    afterNextRender(() => {
      this.applyTheme();
      this.initLucide();
    });
  }

  private applyTheme() {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  private initLucide() {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }
}