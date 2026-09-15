<script setup lang="ts">
import { Pagination } from '@aranghat/navigation-vue';
// Real links: `{page}` in `href-template` becomes the page number, so the browser (and crawlers) navigate; read `?page` on the server or in your router.
</script>

<template>
  <Pagination :page="3" :total="10" href-template="?page={page}" />
</template>
