<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  msg: { type: String, default: 'Hello vue3' }
})
</script>
