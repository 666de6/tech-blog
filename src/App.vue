<!--
 * @Author: Ada J
 * @Date: 2023-07-11 14:11:00
 * @LastEditTime: 2023-10-03 19:13:34
 * @Description: 
-->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from './components/NavHeader.vue'
import BackTop from './components/BackTop.vue';
import Footer from '@/components/Footer.vue'
</script>

<template>
  <NavHeader/>
  <main>
    <RouterView />
    <Footer />
  </main>
  <BackTop />
</template>

<style scoped>

</style>
