import { Questionnaire } from '@aranghat/components-react';
import type { QuestionnaireItem } from '@aranghat/components';

const items = [
  { name: 'direction', required: true, prompt: 'What should we prototype next?', description: 'Choose a direction or write your own.', choices: [{ value: 'delegation', label: 'Delegation', description: 'Show how work moves to a specialist.' }, { value: 'questions', label: 'Question prompts', description: 'Show choices while the interface waits.' }, { value: 'both', label: 'Both together' }], input: { label: 'Another answer', placeholder: 'Type another answer…' } },
  { name: 'detail', required: false, prompt: 'How much detail should it include?', description: 'Skip this if you are not sure yet.', choices: [{ value: 'focused', label: 'Focused' }, { value: 'complete', label: 'Complete flow' }] },
  { name: 'channels', required: true, multiple: true, min: 1, max: 2, prompt: 'Where should we share it?', description: 'Pick one or two.', choices: [{ value: 'slack', label: 'Slack' }, { value: 'email', label: 'Email' }, { value: 'docs', label: 'The docs site' }] },
];

// a custom rule on top of required / min / max / pattern: return a message to block
const validate = (item: QuestionnaireItem, answer: string | string[] | undefined) =>
  item.name === 'direction' && typeof answer === 'string' && answer.length > 0 && answer.length < 4 ? 'Say a little more than that.' : undefined;

export default function Validation() {
  return <Questionnaire items={items} validate={validate} />;
}
