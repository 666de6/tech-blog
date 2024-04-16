<!--
 * @Author: Ada J
 * @Date: 2023-08-03 14:06:26
 * @LastEditTime: 2023-10-14 21:44:34
 * @Description: 
-->
<script setup lang="ts">
import VueMarkdown from '@/components/VueMarkdown.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import { type Category, type Item  } from '@/assets/config/type';
import { blogList as projectBlogList, categoryList as projectCategoryList} from '@/assets/config/projectData';
import { blogList as meBlogList, categoryList as meCategoryList} from '@/assets/config/meData';

const route = useRoute();
const router = useRouter();

const state = reactive({
  allBlogList: [] as Item[],
  parentObj:{
    projectBlogList,
    projectCategoryList,
    meBlogList,
    meCategoryList
  } as Record<string, Record<string, Item[]> | Category[]>,
  mdFile: ''
})

const itemId = ref(route.query.id);
const temData = state.parentObj[`${route.query.ct}BlogList`] as Record<string, Item[]>;
state.allBlogList = temData[`${route.query.tab}`];

state.mdFile = state.allBlogList.find(item => item.id === itemId.value)?.url || '';


</script>
<template>
    <section class="post-sec text-[var(--color-heading)]">
      <VueMarkdown :md-file-path="state.mdFile" />
      <div class="mt-32 cursor-pointer text-lg text-[#999]" @click="router.back()">
        > cd ..
      </div>
    </section>
</template>
<style>
.post-sec ol, ul{
  list-style: revert;
  margin: auto;
  padding: revert;
}
.post-sec{
  font-size: 1rem;
}
.post-sec p{
  white-space: pre-wrap;
  /* text-align: justify; */
  line-height: 2.5rem;
}

</style>