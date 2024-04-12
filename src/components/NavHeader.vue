<!--
 * @Author: Ada J
 * @Date: 2023-07-11 14:36:03
 * @LastEditTime: 2024-01-21 22:43:27
 * @Description: 
-->
<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { computed, reactive, ref, shallowRef } from 'vue';
import IconDark from './icons/IconDark.vue';
import IconLight from './icons/IconLight.vue';
import LogoDark from './icons/LogoDark.vue';
import LogoLight from './icons/LogoLight.vue';
import IconTech from './icons/IconTech.vue';
import IconLang from './icons/IconLang.vue';
import IconLife from './icons/IconLife.vue';

const route = useRoute();
const state = reactive({
  navList: [
    {
      id: '1',
      name: '<Me/>',
      route: '/me',
      icon: shallowRef(IconTech)
    },
    {
      id: '2',
      name: '<Project/>',
      route: '/project',
      icon: shallowRef(IconLang)
    },
    // {
    //   id: '3',
    //   name: '<Life/>',
    //   route: '/life',
    //   icon: shallowRef(IconLife)

    // }
  ],

})


let isDarkTheme = ref(false);
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
// init
changeTheme(systemTheme.matches);
// listen system theme change
systemTheme.onchange = (e) => {
  isDarkTheme.value = e.matches
}

const iconComponent = computed(() => {
  if(isDarkTheme.value){
    return IconLight;
  }else{
    return IconDark;
  }
})

const logoUrl = computed(() => {
  if(isDarkTheme.value){
    return LogoLight;
  }else{
    return LogoDark;
  }
})

function changeTheme(darkTheme: boolean){
  isDarkTheme.value = darkTheme;
  if(darkTheme){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.classList.toggle('dark');
};


</script>
<template>
  <div class="nav-bar w-full h-20 fixed top-0 flex items-center justify-between bg-[var(--color-background)]">
    <RouterLink to="/">
      <div class="w-10">
        <component :is="logoUrl" />
      </div>
    </RouterLink>
    <nav class="font-mono flex justify-end items-center text-base font-bold text-[var(--color-heading)]">
      <div
        class="mr-8"
        v-for="item in state.navList"
        :key="item.id"
        :class="(item.route === route.path) || (item.route === '/' + route.query.ct) ? 'is-active' : 'normal'"
      >
      <RouterLink :to="item.route">
          <span class="max-md:hidden">{{ item.name }}</span>
          <component :is="item.icon" class="min-md:hidden"/>
        </RouterLink>
        
      </div>
      <!-- toggle theme -->
      <div @click="toggleTheme" class="cursor-pointer flex items-center">
        <keep-alive>
          <component :is="iconComponent" />
        </keep-alive>
      </div>
    </nav>
  </div>
</template>


<style scoped>
.nav-bar{
  padding: 0 2rem;
  background-color: var(--color-background);
  transition: color 0.3s, background-color 0.3s;
}
.is-active {
  color: var(--color-text);
}
.normal {
  color:var(--color-heading);
}
</style>