import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService, SocialLink } from '../../services/profile.service';
import { socialData, CDN_URL } from '../../data/data';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="step-content">
      <h2 class="step-title">Digital Presence</h2>
      <p class="step-description">Connect your social networks so other developers can find you.</p>
      
      <div class="highlights-grid">
        @for (social of socialData; track social.id) {
          <div class="input-icon-wrapper">
            <img [src]="CDN_URL + '/' + social.id + '.png'" [alt]="social.name" class="pixel-bullet">
            <input 
              type="url" 
              [id]="'social-' + social.id"
              [ngModel]="getUrl(social.id)"
              (ngModelChange)="updateUrl(social.id, $event)"
              [placeholder]="'Your ' + social.name + ' link...'"
            >
          </div>
        }
      </div>

      <div class="step-actions" style="margin-top: 2.5rem;">
        <button class="back-btn" (click)="prevStep()">Back</button>
        <button class="generate-btn" id="btn-generate" (click)="generate()">Generate PixelMD ✨</button>
      </div>
    </div>
  `,
})
export class Step4Component {
  private profileService = inject(ProfileService);
  socialData = socialData;
  CDN_URL = CDN_URL;

  private urls: Record<string, string> = {};

  ngOnInit() {
    const links = this.profileService.socialLinks();
    for (const link of links) {
      this.urls[link.id] = link.url;
    }
  }

  getUrl(id: string): string {
    return this.urls[id] || '';
  }

  updateUrl(id: string, url: string) {
    this.urls[id] = url;
    const links: SocialLink[] = Object.entries(this.urls)
      .filter(([_, url]) => url.trim() !== '')
      .map(([id, url]) => ({ id, url }));
    this.profileService.updateSocialLinks(links);
  }

  prevStep() {
    this.profileService.prevStep();
  }

  generate() {
    this.profileService.goToStep(5);
  }
}