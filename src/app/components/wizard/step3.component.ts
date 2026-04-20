import { Component, inject, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { techData, CDN_URL, githubThemes } from '../../data/data';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="step-content">
      <h2 class="step-title">Tu Arsenal Tecnológico</h2>
      <p class="step-description">Selecciona las herramientas que dominas para tu stack.</p>

      <div class="search-container">
        <div class="input-icon-wrapper search-bar">
          <i data-lucide="search"></i>
          <input 
            type="text" 
            id="tech-search" 
            [(ngModel)]="searchTerm"
            (ngModelChange)="onSearchChange()"
            placeholder="Buscar tecnología (ej: React, PHP...)"
          >
        </div>
      </div>

      <div class="tech-viewport">
        @for (category of categories; track category) {
          <div class="tech-category-section">
            <h4 class="sub-label">{{ category }}</h4>
            <div class="tech-grid">
              @for (tech of getFilteredTechs(category); track tech.id) {
                <div 
                  class="tech-item" 
                  [class.selected]="isSelected(tech.id)"
                  (click)="toggleTech(tech)"
                >
                  <img [src]="cdnUrl + '/' + tech.id + '.png'" [alt]="tech.name">
                </div>
              }
            </div>
          </div>
        }
      </div>

      <h3 class="sub-label" style="margin-top: 2rem;">Configuración de GitHub Stats</h3>
      <div class="stats-config-grid">
        <input 
          type="text" 
          id="in-github" 
          [(ngModel)]="githubUser"
          (ngModelChange)="updateGithub()"
          placeholder="Tu usuario de GitHub"
        >
        <select 
          id="in-theme"
          [(ngModel)]="githubTheme"
          (ngModelChange)="updateGithub()"
        >
          @for (theme of themes; track theme.id) {
            <option [value]="theme.id">Tema: {{ theme.name }}</option>
          }
        </select>
      </div>

      <div class="step-actions" style="margin-top: 2.5rem;">
        <button class="back-btn" (click)="prevStep()">Regresar</button>
        <button class="next-btn" (click)="nextStep()">Siguiente <i data-lucide="arrow-right"></i></button>
      </div>
    </div>
  `,
})
export class Step3Component implements OnInit {
  private profileService = inject(ProfileService);
  
  readonly cdnUrl = CDN_URL;
  readonly themes = githubThemes;

  searchTerm = '';
  githubUser = '';
  githubTheme = 'tokyonight';

  private allTechs = techData.filter(t => t.category !== 'fun');

  get categories(): string[] {
    const filtered = this.getFilteredTechsData();
    const cats = new Set<string>();
    for (const tech of filtered) {
      cats.add(tech.category);
    }
    return Array.from(cats);
  }

  ngOnInit() {
    this.githubUser = this.profileService.githubUser();
    this.githubTheme = this.profileService.githubTheme();
  }

  onSearchChange() {
    // trigger change detection
  }

  getFilteredTechsData() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) return this.allTechs;
    return this.allTechs.filter(t => t.name.toLowerCase().includes(term));
  }

  getFilteredTechs(category: string) {
    return this.getFilteredTechsData().filter(t => t.category === category);
  }

  isSelected(techId: string): boolean {
    return this.profileService.isTechSelected(techId);
  }

  toggleTech(tech: any) {
    this.profileService.toggleTech(tech);
  }

  updateGithub() {
    this.profileService.updateGithubUser(this.githubUser);
    this.profileService.updateGithubTheme(this.githubTheme);
  }

  prevStep() {
    this.profileService.prevStep();
  }

  nextStep() {
    this.profileService.nextStep();
  }
}