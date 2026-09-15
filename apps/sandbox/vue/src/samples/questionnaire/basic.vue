<script setup lang="ts">
import { ref } from 'vue';
import { Questionnaire } from '@aranghat/components-vue';

const items = [
  { name: 'direction', required: true, prompt: 'What should we prototype next?', description: 'Choose a direction or write your own.', choices: [{ value: 'delegation', label: 'Delegation', description: 'Show how work moves to a specialist.' }, { value: 'questions', label: 'Question prompts', description: 'Show choices while the interface waits.' }, { value: 'both', label: 'Both together' }], input: { label: 'Another answer', placeholder: 'Type another answer…' } },
  { name: 'detail', required: false, prompt: 'How much detail should it include?', description: 'Skip this if you are not sure yet.', choices: [{ value: 'focused', label: 'Focused' }, { value: 'complete', label: 'Complete flow' }] },
  { name: 'channels', required: true, multiple: true, min: 1, max: 2, prompt: 'Where should we share it?', description: 'Pick one or two.', choices: [{ value: 'slack', label: 'Slack' }, { value: 'email', label: 'Email' }, { value: 'docs', label: 'The docs site' }] },
];
const answers = ref<Record<string, string | string[]>>({});
const onAnswer = (e: CustomEvent<{ answers: Record<string, string | string[]> }>) => { answers.value = e.detail.answers; };
const onComplete = (e: CustomEvent<{ answers: Record<string, string | string[]> }>) => console.log('complete', e.detail.answers);
</script>

<template>
  <Questionnaire :items="items" :value="answers" @answer-change="onAnswer" @complete="onComplete" />
  <p>{{ Object.keys(answers).length }} answered</p>
</template>
