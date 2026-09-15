<script setup lang="ts">
import { Tab, TabPanel, Tabs } from '@aranghat/components-vue';
</script>

<template>
  <Tabs value="a" activation="manual">
    <Tab value="a">Alpha</Tab>
    <Tab value="b">Beta</Tab>
    <TabPanel value="a"><p>Arrows move focus; Enter or Space selects.</p></TabPanel>
    <TabPanel value="b"><p>Beta panel.</p></TabPanel>
  </Tabs>
</template>
