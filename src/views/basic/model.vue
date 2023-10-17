<script setup>
import { ref } from 'vue'
import MyInput from '@/components/MyInput/index.vue'

const textValue = ref('hello')
const isShow = ref(true)
</script>

<template>
  <div>
    <MyInput v-model:modelValue="textValue" v-model:visible="isShow" />

    <div>
      <button @click="isShow = !isShow">click me!</button>
      {{ textValue }}
    </div>
  </div>
</template>
