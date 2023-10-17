<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <ul>
    <li>
      Basic
      <ul>
        <li><RouterLink to="/reactivity">reactivity</RouterLink></li>
        <li><RouterLink to="/model">v-model</RouterLink></li>
      </ul>
    </li>
    <li><RouterLink to="/tinymce">tinymce</RouterLink></li>
  </ul>
</template>
