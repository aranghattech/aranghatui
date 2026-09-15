<script setup lang="ts">
import { Tab, TabPanel, Tabs } from '@aranghat/components-vue';
</script>

<template>
  <Tabs value="overview" variant="line">
    <Tab value="overview">Overview</Tab>
    <Tab value="analytics">Analytics</Tab>
    <Tab value="reports">Reports</Tab>
    <TabPanel value="overview"><p>Overview of the last 30 days.</p></TabPanel>
    <TabPanel value="analytics"><p>Traffic and conversion.</p></TabPanel>
    <TabPanel value="reports"><p>Downloadable reports.</p></TabPanel>
  </Tabs>
</template>
