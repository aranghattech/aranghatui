import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { SAMPLES, SAMPLE_COMPONENTS } from './samples';

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet, ...SAMPLE_COMPONENTS],
  template: `
    <main>
      @for (s of samples; track s.id) {
        <section [attr.data-sample]="s.id">
          <h2>{{ s.id }}</h2>
          <ng-container *ngComponentOutlet="s.component" />
        </section>
      }
    </main>
  `,
})
export class App {
  samples = SAMPLES;
}
