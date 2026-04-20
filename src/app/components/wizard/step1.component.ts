import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="step-content">
      <h2 class="step-title">Cuéntanos sobre ti</h2>
      <p class="step-description">Define cómo quieres que te vean en tu perfil de GitHub.</p>
      
      <div class="form-group-huge">
        <label for="greeting">Saludo Personalizado</label>
        <input 
          type="text" 
          id="greeting" 
          [(ngModel)]="greeting" 
          (ngModelChange)="updateData()"
          placeholder="Ej. Hey, I'm / Hola, soy / Welcome to..."
        >
      </div>

      <div class="form-group-huge">
        <label for="name">Nombre Artístico o Real</label>
        <input 
          type="text" 
          id="name" 
          [(ngModel)]="name" 
          (ngModelChange)="updateData()"
          placeholder="Ej. John Doe"
        >
      </div>
      
      <div class="form-group-huge">
        <label for="title">Tu Rol Principal</label>
        <input 
          type="text" 
          id="title" 
          [(ngModel)]="title" 
          (ngModelChange)="updateData()"
          placeholder="Ej. UI/UX Designer & Frontend Developer"
        >
      </div>

      <div class="form-group-huge">
        <label for="bio">Una Bio Potente</label>
        <textarea 
          id="bio" 
          rows="2" 
          [(ngModel)]="bio" 
          (ngModelChange)="updateData()"
          placeholder="Descríbete en una frase..."
        ></textarea>
      </div>

      <div class="step-actions">
        <div style="flex-grow: 1;"></div>
        <button class="next-btn" (click)="nextStep()">
          Continuar <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </div>
  `,
})
export class Step1Component {
  private profileService = inject(ProfileService);

  get greeting(): string { return this.profileService.profileData().greeting; }
  set greeting(v: string) { this.profileService.updateProfileData({ greeting: v }); }
  
  get name(): string { return this.profileService.profileData().name; }
  set name(v: string) { this.profileService.updateProfileData({ name: v }); }
  
  get title(): string { return this.profileService.profileData().title; }
  set title(v: string) { this.profileService.updateProfileData({ title: v }); }
  
  get bio(): string { return this.profileService.profileData().bio; }
  set bio(v: string) { this.profileService.updateProfileData({ bio: v }); }

  updateData() {
    this.profileService.updateProfileData({
      greeting: this.greeting,
      name: this.name,
      title: this.title,
      bio: this.bio
    });
  }

  nextStep() {
    this.profileService.nextStep();
  }
}