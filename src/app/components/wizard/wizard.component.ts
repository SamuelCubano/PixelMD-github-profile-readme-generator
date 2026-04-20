import { Component, inject } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Step1Component } from './step1.component';
import { Step2Component } from './step2.component';
import { Step3Component } from './step3.component';
import { Step4Component } from './step4.component';
import { Step5Component } from './step5.component';
import { IconPickerComponent } from './icon-picker.component';
import { WizardStepperComponent } from '../wizard-stepper/wizard-stepper.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [
    WizardStepperComponent,
    Step1Component,
    Step2Component, 
    Step3Component,
    Step4Component,
    Step5Component,
    IconPickerComponent
  ],
  template: `
    <div class="wizard-container">
      <app-wizard-stepper></app-wizard-stepper>

      @switch (currentStep()) {
        @case (1) {
          <section class="step-view active">
            <app-step1></app-step1>
          </section>
        }
        @case (2) {
          <section class="step-view active">
            <app-step2></app-step2>
          </section>
        }
        @case (3) {
          <section class="step-view active">
            <app-step3></app-step3>
          </section>
        }
        @case (4) {
          <section class="step-view active">
            <app-step4></app-step4>
          </section>
        }
        @case (5) {
          <section class="step-view active">
            <app-step5></app-step5>
          </section>
        }
      }

      <app-icon-picker></app-icon-picker>
    </div>
  `,
})
export class WizardComponent {
  private profileService = inject(ProfileService);
  currentStep = this.profileService.currentStep;
}