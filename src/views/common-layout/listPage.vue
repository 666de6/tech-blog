<!--
 * @Author: Ada J
 * @Date: 2023-07-18 14:08:37
 * @LastEditTime: 2023-10-14 14:33:50
 * @Description: 
-->
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, reactive, watchEffect } from "vue";
import { type Category, type Item  } from "@/assets/config/type";
import { blogList as projectBlogList, categoryList as projectCategoryList} from '@/assets/config/projectData';
import { blogList as meBlogList, categoryList as meCategoryList} from '@/assets/config/meData';
import { blogList as blogBlogList, categoryList as blogCategoryList} from '@/assets/config/techData';
import IconLink from '@/components/icons/IconLink.vue';

const route = useRoute();
const router = useRouter();
const state = reactive({
  renderCategory: [] as Category[],
  activeTab: {} as Category,
  renderBlog: [] as Item[],
  allBlogList: {} as Record<string, Item[]>,
  parentObj:{
    projectBlogList,
    projectCategoryList,
    meBlogList,
    meCategoryList,
    blogBlogList,
    blogCategoryList
  } as Record<string, Record<string, Item[]> | Category[]>
})
watchEffect(() => (route.path !== '/' && route.path !== '/detail' && route.path !== '/projectTemplate') && initDataWhenRoute(route.path));

function initDataWhenRoute(path: string){
  const prefix = path.split('/')[1];
  state.allBlogList = state.parentObj[`${prefix}BlogList`] as Record<string, Item[]>;
  state.renderCategory = state.parentObj[`${prefix}CategoryList`] as Category[];
  const activeTabStore = JSON.parse(sessionStorage.getItem('activeTab')!); 
  state.activeTab = activeTabStore?.navId === prefix ? activeTabStore : {};
  if(!state.activeTab.id){
    state.activeTab = state.renderCategory[0];
  };
  changeTab(state.activeTab);
}
function changeTab(item: Category){
  state.renderCategory.forEach(element => {
    element.active = false;
    if(element.id === item.id){
      element.active = true;
    }
  });
  state.activeTab = item;
  sessionStorage.setItem('activeTab', JSON.stringify(item));
  state.renderBlog = state.allBlogList[item.id as keyof Item];
}
function goToDetail(blog: Item){
  if(blog.isExternal){
    window.open(blog.url);
    return;
  }
  if(blog.category === 'project'){
    router.push({
      path: '/projectTemplate',
      query: {
        ct: blog.category,
        tab: blog.parentId,
        id: blog.id
      }
    });    
  }else{
    router.push({
      path: '/detail',
      query: {
        ct: blog.category,
        tab: blog.parentId,
        id: blog.id
      }
    });
  }
}
onMounted(() => {

})
</script>
<template>
    <section>
      <div class="whitespace-nowrap overflow-auto text-[var(--color-text)]">
        <span class="cursor-pointer mr-6 text-xl duration-500 hover:text-[var(--color-heading)]" 
        v-for="category in state.renderCategory" 
        :key="category.id"
        :class="category.active ? 'is-active' : ''"
        @click="changeTab(category)"
        >
          <span :style="`color:${category.active ? 'orange' : ''};`" class="-mr-3">
            {{ '{' }}
          </span>
          {{ category.name }}
          <span :style="`color:${category.active ? 'orange' : ''}`" class="-ml-3">
            {{ '}' }}
          </span>
        </span>
      </div>
      <div class="mt-10">
        <div
          class="w-full h-10 mb-4 text-lg
                flex items-center pl-3
                hover:text-orange-400 
                cursor-pointer"
          v-for="blog in state.renderBlog"
          :key="blog.id"
          @click="goToDetail(blog)"
        >
          <span class="mr-3 font-extrabold hover:text-orange-400"> > </span>
          <span class="hover:text-[var(--color-heading)]">{{ blog.name }}</span>
          <IconLink v-if="blog.isExternal"/>
          <span class="text-sm ml-4 text-[var(--color-text)] max-md:hidden">
            {{ blog.date }}
          </span>
        </div>
      </div>
      <div class="mt-20 cursor-pointer text-lg" @click="router.back()">
        > cd ..
      </div>
    </section>
</template>

<style scoped>
.is-active{
  color: var(--color-heading);
}
</style>