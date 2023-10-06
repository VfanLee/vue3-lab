<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue', 'update:visible'])
</script>

<template>
  <div v-show="visible" style="padding: 10px; border: 1px dashed">
    <input type="text" :value="modelValue" @input="e => $emit('update:modelValue', e.target.value)" />
    <button @click="() => $emit('update:visible', false)">close</button>
  </div>
</template>
