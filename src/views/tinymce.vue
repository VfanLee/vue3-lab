<script setup>
import { ref } from 'vue'
import Tinymce from '@/components/Tinymce/index.vue'

const val = ref('hello world')
const isText = ref(true)
</script>

<template>
  <div class="tinymce">
    <Tinymce v-model="val" />

    <button @click="isText = !isText" style="margin: 10px">html切换</button>
    <div v-if="isText">{{ val }}</div>
    <div v-else v-html="val"></div>
  </div>
</template>
