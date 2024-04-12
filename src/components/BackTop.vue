<!--
 * @Author: Ada J
 * @Date: 2023-09-25 22:22:55
 * @LastEditTime: 2023-10-14 16:47:33
 * @Description: 
-->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import IconArrow from './icons/IconArrow.vue';
function backTop(){
  let st = document.body.scrollTop || document.documentElement.scrollTop;
  if(st > 0){
    document.body.scrollTop = document.documentElement.scrollTop = st - 100;
    window.requestAnimationFrame(backTop)
  }
}
const visible = ref(false);
document.addEventListener('scroll', () => {
  visible.value = document.documentElement.scrollTop > 100 ? true : false; 
})
</script>
<template>
  <div class="fixed bottom-10 right-10 cursor-pointer">
    <IconArrow v-show="visible" @click="backTop"/> 
  </div>
</template>