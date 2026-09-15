<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem } from '@aranghat/navigation-vue';
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
    <BreadcrumbItem ellipsis />
    <BreadcrumbItem><a href="#">Components</a></BreadcrumbItem>
    <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
  </Breadcrumb>
</template>
