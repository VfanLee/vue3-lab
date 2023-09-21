<script setup>
import { ref } from 'vue'

const calendarValue = ref(new Date())
</script>

<template>
  <div class="home">
    <h2>{{ $t('home') }}</h2>

    <section>
      <el-calendar v-model="calendarValue" />
    </section>
  </div>
</template>
