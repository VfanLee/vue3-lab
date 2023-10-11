<script setup>
import { ref } from 'vue'

const currentTime = ref(new Date())
const currentTimeHtml = ref(`<span style="color: var(--primary-color)">${new Date()}</span>`)
const calendarValue = ref(new Date())
</script>

<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>{{ $t('currentTime', { time: currentTime }) }}</section>
    <section v-html="$t('currentTime', { time: currentTimeHtml })"></section>

    <section>
      <el-calendar v-model="calendarValue" />
    </section>
  </div>
</template>
