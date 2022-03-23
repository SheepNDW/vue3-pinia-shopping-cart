<script setup>
import { RouterView } from 'vue-router'
import ToastMessage from '@/components/ToastMessage.vue'
</script>

<template>
  <ToastMessage />
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/styles/all.scss';
</style>
