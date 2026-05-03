import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { CDN_URL, highlightedIcons } from '../../data/data';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="step-content">
      <h2 class="step-title">Your Highlights</h2>
      <p class="step-description">Click on each icon to customize it with Pixel Art style.</p>
      
      <div class="highlights-grid">
        @for (item of items; track item.key) {
          <div class="input-icon-wrapper">
            <div class="icon-selector-trigger" (click)="openIconPicker(item.key)" title="Change icon">
              <img [src]="getIcon(item.key)" alt="{{ item.key }}" class="pixel-bullet">
              <i data-lucide="chevron-down" class="mini-icon-indicator"></i>
            </div>
            <input 
              type="text" 
              [id]="'in-' + item.key"
              [ngModel]="getValue(item.key)"
              (ngModelChange)="updateValue(item.key, $event)"
              [placeholder]="item.placeholder"
            >
          </div>
        }
      </div>

      <div class="step-actions">
        <button class="back-btn" (click)="prevStep()">Back</button>
        <button class="next-btn" (click)="nextStep()">Next <i data-lucide="arrow-right"></i></button>
      </div>
    </div>
  `,
})
export class Step2Component {
  private profileService = inject(ProfileService);
  
  items = [
    { key: 'work', placeholder: 'What are you currently working on?' },
    { key: 'learning', placeholder: 'What are you learning?' },
    { key: 'collab', placeholder: 'What do you want to collaborate on?' },
    { key: 'featuredProject', placeholder: 'What is your featured project?' },
    { key: 'freeTime', placeholder: 'What do you like to do in your free time?' },
  ];

  getIcon(key: string): string {
    return this.profileService.highlightIcons()[key] || `${CDN_URL}/${key}.png`;
  }

  getValue(key: string): string {
    const data = this.profileService.highlightData();
    return (data as any)[key] || '';
  }

  updateValue(key: string, value: string) {
    this.profileService.updateHighlightData({ [key]: value });
  }

  openIconPicker(targetId: string) {
    window.dispatchEvent(new CustomEvent('open-icon-picker', { detail: targetId }));
  }

  prevStep() {
    this.profileService.prevStep();
  }

  nextStep() {
    this.profileService.nextStep();
  }
}