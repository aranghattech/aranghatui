<script setup lang="ts">
import { NativeSelect } from '@aranghat/base-vue';
</script>

<template>
  <NativeSelect aria-label="Country">
    <optgroup label="Europe">
      <option value="de">Germany</option>
      <option value="fr">France</option>
    </optgroup>
    <optgroup label="Asia">
      <option value="in">India</option>
      <option value="jp">Japan</option>
    </optgroup>
  </NativeSelect>
</template>
