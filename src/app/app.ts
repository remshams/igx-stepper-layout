import { Component, computed, signal } from '@angular/core';
import {
  IgxStepComponent,
  IgxStepContentDirective,
  IgxStepperComponent,
  IgxStepTitleDirective
} from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [
    IgxStepperComponent,
    IgxStepComponent,
    IgxStepTitleDirective,
    IgxStepContentDirective
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('IGX Stepper Layout Test');
  protected readonly activeStepIndex = signal(0);
  protected readonly isStepTwoActive = computed(() => this.activeStepIndex() === 1);

  protected goToStep(stepper: IgxStepperComponent, index: number): void {
    this.activeStepIndex.set(index);
    stepper.navigateTo(index);
  }
}
