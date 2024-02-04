<script setup>
import HelloTitle from '@/components/HelloTitle.vue'
import CounterButton from '@/components/CounterButton.vue'

const title = ref('HomeView')
</script>

<template>
  <main>
    <HelloTitle :title="title" />
    <CounterButton />
  </main>
</template>
