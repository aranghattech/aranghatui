import { Component } from '@angular/core';
import { ArtQuestionnaire } from '@aranghat/components-angular';

type Answers = Record<string, string | string[]>;
const items = [
  { name: 'direction', required: true, prompt: 'What should we prototype next?', description: 'Choose a direction or write your own.', choices: [{ value: 'delegation', label: 'Delegation', description: 'Show how work moves to a specialist.' }, { value: 'questions', label: 'Question prompts', description: 'Show choices while the interface waits.' }, { value: 'both', label: 'Both together' }], input: { label: 'Another answer', placeholder: 'Type another answer…' } },
  { name: 'detail', required: false, prompt: 'How much detail should it include?', description: 'Skip this if you are not sure yet.', choices: [{ value: 'focused', label: 'Focused' }, { value: 'complete', label: 'Complete flow' }] },
  { name: 'channels', required: true, multiple: true, min: 1, max: 2, prompt: 'Where should we share it?', description: 'Pick one or two.', choices: [{ value: 'slack', label: 'Slack' }, { value: 'email', label: 'Email' }, { value: 'docs', label: 'The docs site' }] },
];

@Component({
  selector: 'sample-questionnaire-basic',
  imports: [ArtQuestionnaire],
  template: `
    <art-questionnaire [items]="items" [value]="answers" (answerChange)="onAnswer($event)" (complete)="onComplete($event)"></art-questionnaire>
    <p>{{ answered }} answered</p>
  `,
})
export class QuestionnaireBasic {
  items = items;
  answers: Answers = {};
  get answered() { return Object.keys(this.answers).length; }
  onAnswer(e: CustomEvent<{ answers: Answers }>) { this.answers = e.detail.answers; }
  onComplete(e: CustomEvent<{ answers: Answers }>) { console.log('complete', e.detail.answers); }
}
