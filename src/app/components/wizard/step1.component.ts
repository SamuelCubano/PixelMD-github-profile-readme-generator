import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="step-content">
      <h2 class="step-title">Tell us about you</h2>
      <p class="step-description">Define how you want to be seen on your GitHub profile.</p>
      
      <div class="form-group-huge">
        <label for="greeting">Custom Greeting</label>
        <input 
          type="text" 
          id="greeting" 
          [(ngModel)]="greeting" 
          (ngModelChange)="updateData()"
          placeholder="E.g. Hey, I'm / Hello, I'm / Welcome to..."
        >
      </div>

      <div class="form-group-huge">
        <label for="name">Real or Artistic Name</label>
        <input 
          type="text" 
          id="name" 
          [(ngModel)]="name" 
          (ngModelChange)="updateData()"
          placeholder="E.g. John Doe"
        >
      </div>
      
      <div class="form-group-huge">
        <label for="title">Your Main Role</label>
        <input 
          type="text" 
          id="title" 
          [(ngModel)]="title" 
          (ngModelChange)="updateData()"
          placeholder="E.g. UI/UX Designer & Frontend Developer"
        >
      </div>

      <div class="form-group-huge">
        <label for="bio">A Powerful Bio</label>
        <textarea 
          id="bio" 
          rows="2" 
          [(ngModel)]="bio" 
          (ngModelChange)="updateData()"
          placeholder="Describe yourself in one sentence..."
        ></textarea>
      </div>

      <div class="step-actions">
        <div style="flex-grow: 1;"></div>
        <button class="next-btn" (click)="nextStep()">
          Continue <i data-lucide="arrow-right"></i>
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