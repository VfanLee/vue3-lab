<script setup>
import { reactive, ref } from 'vue'

const obj = ref({})
const arr = ref([])

const updateObj = () => {
  obj.value = { id: '001:update', name: 'foo:update', gender: 'male:update' }
}
const updateArr = () => {
  arr.value = [4, 5, 6]
}

obj.value = { id: '001', name: 'foo', gender: 'male' }
arr.value = [1, 2, 3]
</script>

<template>
  <h2>Reactivity</h2>

  <section>
    obj: {{ obj }}
    <button type="button" @click="updateObj">update obj</button>
  </section>
  <section>
    arr: {{ arr }}
    <button type="button" @click="updateArr">update arr</button>
  </section>
</template>
