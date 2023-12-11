<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main-container">
    <component :is="$route.meta.layout || 'div'">
    <RouterView />
    </component>
  </main>
</template>

<style scoped>
.main-container {
  height: 100vh;
  width: 100vw;
}
</style>
