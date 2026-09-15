<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@aranghat/base-vue';
import { Bubble, Message, MessageScroller, MessageScrollerItem } from '@aranghat/components-vue';

const ids = ref([21, 22, 23, 24]);
// rows inserted before the first one keep the visible row exactly where it is
const earlier = () => { const first = ids.value[0]!; ids.value.unshift(...Array.from({ length: 5 }, (_, i) => first - 5 + i)); };
</script>

<template>
  <Button variant="outline" @click="earlier">Load earlier messages</Button>
  <MessageScroller default-scroll-position="start" style="height: calc(var(--art-space-20) * 4)">
    <MessageScrollerItem v-for="n in ids" :key="n" :message-id="`m${n}`">
      <Message :align="n % 2 ? 'start' : 'end'">
        <Bubble :variant="n % 2 ? 'muted' : 'default'">Message {{ n }}</Bubble>
      </Message>
    </MessageScrollerItem>
  </MessageScroller>
</template>
