<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@aranghat/navigation-vue';
</script>

<template>
  <Breadcrumb separator="slash">
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
    <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
</template>
