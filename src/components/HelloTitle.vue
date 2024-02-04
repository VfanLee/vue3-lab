<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'World'
  }
})
</script>

<template>
  <h2>Hello {{ props.title }}</h2>
</template>
