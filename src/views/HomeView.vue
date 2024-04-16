<!--
 * @Author: Ada J
 * @Date: 2023-07-11 14:11:00
 * @LastEditTime: 2023-10-14 15:06:43
 * @Description: 
-->
<script setup lang="ts">
  import {ref, onMounted, onUnmounted } from 'vue';
  onMounted(() => {
    console.log("hello world :)");
    
  });

  onUnmounted(() => {
  })
</script>

<template>
    <section>
      <div class="typewriter text-lg">
        <p class="animate-type-wrap animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span>
            <span style="color: orange;">Hello World! </span>
            <span>I'm Ada</span>
            <span class="max-md:hidden">, a frontend developer, a minimalist. </span>
          </span>
        </p>
        <p class="max-md:hidden opacity-0 animate-type-mid animate-delay-3000 animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span>
            Love learning, coding and trying new things. 
          </span> 
        </p>
        <br />
        <p class="max-md:hidden opacity-0 animate-type-mid animate-delay-6000 animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span>
            Live as if you were to die tomorrow.
          </span>
        </p>
        <p class="max-md:hidden opacity-0 animate-type-mid animate-delay-9000 animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span>
            Learn as if you were to live forever.
          </span>
        </p>
        <p class="opacity-0 animate-type-mid max-md:animate-delay-3000 animate-delay-12000 animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span style="color: orange;">
            爱生活如濒死，求大道若永生。
          </span>
        </p>
        <br />
        <p class="opacity-0 animate-type-norm max-md:animate-delay-6000 animate-delay-15000 animate-fill-forwards">
          <span style="font-weight: bold;"> > </span>
          <span>
            <span style="color: orange;">Enjoy life! Enjoy coding!</span>
          </span>
        </p>
      </div>
    </section>

</template>
<style scoped>
.typewriter p{
  /* font-family: monospace; */
  width: 100%;
  overflow: hidden;
  border-right: 6px solid orange; 
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .typewriter p{
    letter-spacing: 1px;
  }
}

</style>