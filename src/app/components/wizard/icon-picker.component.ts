import { Component, inject, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { funIcons, CDN_URL } from '../../data/data';

@Component({
  selector: 'app-icon-picker',
  standalone: true,
  imports: [FormsModule],
  template: `
    @if (isOpen()) {
      <div class="modal-overlay" (click)="closeOnOverlay($event)">
        <div class="modal-content">
          <div class="modal-header">
            <h3>Select Icon</h3>
            <button class="close-modal" (click)="close()">
              <i data-lucide="x"></i>
            </button>
          </div>
          <div class="search-container">
            <div class="input-icon-wrapper" style="width: 100%;">
              <i data-lucide="search" style="left: 10px;"></i>
              <input 
                type="text" 
                id="modal-search" 
                [(ngModel)]="searchTerm"
                (ngModelChange)="onSearchChange()"
                placeholder="Search icon..."
                style="padding-left: 35px;"
              >
            </div>
          </div>
          <div class="modal-grid">
            @for (icon of filteredIcons; track icon.id) {
              <div class="modal-icon-item" (click)="selectIcon(icon.id)">
                <img [src]="cdnUrl + '/' + icon.id + '.png'" [title]="icon.name">
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
})
export class IconPickerComponent {
  private profileService = inject(ProfileService);
  
  readonly cdnUrl = CDN_URL;
  searchTerm = '';

  readonly isOpen = this.profileService.isPickerOpen;
  private targetId = this.profileService.pickerTarget;

  private allIcons = funIcons;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        setTimeout(() => this.initLucide(), 0);
      }
    });
  }

  private initLucide() {
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }

  get filteredIcons() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) return this.allIcons;
    return this.allIcons.filter(i => i.name.toLowerCase().includes(term));
  }

  onSearchChange() {
    // trigger change detection
  }

  closeOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.close();
    }
  }

  close() {
    this.profileService.closePicker();
    this.searchTerm = '';
  }

  selectIcon(iconId: string) {
    const target = this.targetId();
    if (target) {
      this.profileService.updateHighlightIcon(target, iconId);
    }
    this.close();
  }
}