<script setup lang="ts">
import { Tab, TabPanel, Tabs } from '@aranghat/components-vue';
</script>

<template>
  <Tabs value="one">
    <Tab value="one">One</Tab>
    <Tab value="two" disabled>Two</Tab>
    <Tab value="three">Three</Tab>
    <TabPanel value="one"><p>First panel.</p></TabPanel>
    <TabPanel value="two"><p>Never reachable.</p></TabPanel>
    <TabPanel value="three"><p>Third panel.</p></TabPanel>
  </Tabs>
</template>
