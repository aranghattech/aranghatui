<script setup lang="ts">
import { StatePage } from '@aranghat/widgets-vue';
import { Button, Icon } from '@aranghat/base-vue';
</script>

<template>
  <StatePage kind="error" code="500" description="Our servers had a hiccup. Try again in a moment — if it keeps happening, tell us.">
    <Icon slot="media"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></Icon>
    <Button slot="actions">Try again</Button>
    <span style="font-size: var(--art-font-size-xs); color: var(--art-color-fg-muted)">Request id 8f3c-21ab</span>
  </StatePage>
</template>
