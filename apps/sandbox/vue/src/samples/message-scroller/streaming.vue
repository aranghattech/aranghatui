<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@aranghat/base-vue';
import { Bubble, Message, MessageScroller, MessageScrollerItem } from '@aranghat/components-vue';

interface Turn { id: string; mine: boolean; text: string }
const reply = 'The reply streams in word by word while the scroller keeps the end in view as long as you are following it.';
const turns = ref<Turn[]>([]);
function ask() {
  const n = turns.value.length / 2 + 1;
  turns.value.push({ id: `q${n}`, mine: true, text: `Question ${n}: what happens next?` }, { id: `a${n}`, mine: false, text: '' });
  const words = reply.split(' ');
  let i = 0;
  const tick = setInterval(() => {
    const a = turns.value.find((x) => x.id === `a${n}`);
    if (a) a.text = words.slice(0, i + 1).join(' ');
    if (++i >= words.length) clearInterval(tick);
  }, 120);
}
</script>

<template>
  <MessageScroller style="height: calc(var(--art-space-20) * 4)">
    <!-- the question starts a turn: anchored near the top with a peek of the previous row -->
    <MessageScrollerItem v-for="t in turns" :key="t.id" :message-id="t.id" :scroll-anchor="t.mine">
      <Message :align="t.mine ? 'end' : 'start'">
        <Bubble :variant="t.mine ? 'default' : 'muted'">{{ t.text }}</Bubble>
      </Message>
    </MessageScrollerItem>
  </MessageScroller>
  <Button variant="outline" @click="ask">Ask a question</Button>
</template>
