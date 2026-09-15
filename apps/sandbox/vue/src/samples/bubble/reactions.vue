<script setup lang="ts">
import { Bubble } from '@aranghat/components-vue';
</script>

<template>
  <Bubble variant="muted" reactions-side="bottom" reactions-align="start"><span>Reactions at the bottom start.</span><span slot="reactions" role="img" aria-label="heart and fire">❤️ 🔥</span></Bubble>
  <Bubble align="end" reactions-side="top" reactions-align="end"><span>Reactions at the top end.</span><span slot="reactions" role="img" aria-label="3 laughing">😂 3</span></Bubble>
</template>
