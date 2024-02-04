<script setup>
import { useCounterOptionStore } from '@/stores/counterOption'
import { useCounterSetupStore } from '@/stores/counterSetup'

const counterOptionStore = useCounterOptionStore()
const counterSetupStore = useCounterSetupStore()
</script>

<template>
  <div>
    <p>
      <strong>Option: {{ counterOptionStore.doubleCount }}</strong>
      <button type="button" @click="counterOptionStore.increment">{{ counterOptionStore.count }}</button>
    </p>
    <p>
      <strong>Setup: {{ counterSetupStore.doubleCount }}</strong>
      <button type="button" @click="counterSetupStore.increment">{{ counterSetupStore.count }}</button>
    </p>
  </div>
</template>

<style scoped>
button {
  margin-left: 16px;
}
</style>
