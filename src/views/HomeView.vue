<script setup>
import { computed, ref } from 'vue'

const calendarValue = ref(new Date())
const date = computed(() => {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`
})
</script>

<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('todayis', { date: date }) }}</section>

    <section>
      <el-calendar v-model="calendarValue" />
    </section>
  </div>
</template>
