<script setup>
import { ref } from 'vue'
import Tinymce from '@/components/Tinymce/index.vue'

const value = ref('<p>hello world</p>')
const handleChange = (e, editor) => {
  const content = editor.getContent()
  const textContent = editor.getContent({ format: 'text' })
  const charCount = textContent.length
  const wordCount = textContent.split(/\s+/).filter(Boolean).length

  console.log('内容:', content)
  console.log('字符数:', charCount)
  console.log('字数:', wordCount)
}
</script>

<template>
  <div class="tinymce">
    <Tinymce v-model="value" @change="handleChange" />

    <section>{{ value }}</section>
  </div>
</template>
