import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-wizard-stepper',
  standalone: true,
  template: `
    <div class="stepper-progress">
      <div class="progress-bar" [style.width.%]="progressWidth"></div>
      @for (step of steps; track step) {
        <div 
          class="step-dot" 
          [class.active]="currentStep() >= step"
          (click)="goToStep(step)"
        >
          {{ step }}
        </div>
      }
    </div>
  `,
})
export class WizardStepperComponent {
  private profileService = inject(ProfileService);
  currentStep = this.profileService.currentStep;
  steps = [1, 2, 3, 4, 5];

  get progressWidth(): number {
    return ((this.currentStep() - 1) / (this.steps.length - 1)) * 100;
  }

  goToStep(step: number) {
    this.profileService.goToStep(step);
  }
}