<script setup lang="ts">
import { Questionnaire } from '@aranghat/components-vue';
</script>

<template>
  <Questionnaire items="[{&quot;name&quot;:&quot;feedback&quot;,&quot;required&quot;:true,&quot;prompt&quot;:&quot;Anything else we should know?&quot;,&quot;input&quot;:{&quot;label&quot;:&quot;Your feedback&quot;,&quot;placeholder&quot;:&quot;Write a few words…&quot;,&quot;multiline&quot;:true},&quot;minLength&quot;:10}]" />
</template>
