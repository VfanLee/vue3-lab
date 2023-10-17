<script setup>
import { reactive, ref } from 'vue'

const obj = ref({})
const arr = ref([])

const updateObj = () => {
  obj.value = { id: '001:update', name: 'foo:update', gender: 'male:update' }
}
const addObjFoo = () => {
  obj.value.foo = Date.now()
}
const removeObjFoo = () => {
  delete obj.value.foo
}

const updateArr = () => {
  arr.value = [4, 5, 6]
}
const updateArrIndexValue = () => {
  arr.value[1] = Date.now()
}
const updateArrLength = () => {
  arr.value.length = 1
}

obj.value = { id: '001', name: 'foo', gender: 'male' }
arr.value = [1, 2, 3]
</script>

<template>
  <h2>Reactivity</h2>

  <section>
    <p>obj: {{ obj }}</p>
    <button type="button" @click="updateObj">update obj</button>
    <button type="button" @click="addObjFoo">add obj.foo</button>
    <button type="button" @click="removeObjFoo">remove obj.foo</button>
  </section>

  <section>
    <p>arr: {{ arr }}</p>
    <button type="button" @click="updateArr">update arr</button>
    <button type="button" @click="updateArrIndexValue">update arr[1]</button>
    <button type="button" @click="updateArrLength">update arr length</button>
  </section>
</template>
