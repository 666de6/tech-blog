<!--
 * @Author: Ada J
 * @Date: 2023-10-03 17:41:01
 * @LastEditTime: 2023-10-03 19:17:30
 * @Description: footer
-->
<script lang="ts" setup>
import IconEmail from '@/components/icons/IconEmail.vue';
</script>
<template>
  <section>
    <div class="footer mt-12 text-base opacity-50">
      <div class="flex items-center mb-2">
        <IconEmail />
        <a class="ml-2" href="mailto:jiang.666de6@gmail.com">Contact me</a>
      </div>
      © 2023-Present by Ada Jiang is licensed under  
      <a class="cursor-pointer" rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC BY-NC-SA 4.0
      </a>
    </div>
  </section>
</template>
<style>
.footer a{
  text-decoration: underline !important;
}
</style>