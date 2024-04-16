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
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';



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
  mdFile: '',
  settings: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  // breakpoints are mobile first
  // any settings not specified will fallback to the carousel settings
  breakpoints: {
    // 700px and up
    700: {
      itemsToShow: 3.5,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 3.5,
      snapAlign: 'start',
    },
  },
  slideList: {
    '1': [
      '/assets/xuyao/IMG_7323.PNG',
      '/assets/xuyao/IMG_7324.PNG',
      '/assets/xuyao/IMG_7325.PNG',
      '/assets/xuyao/IMG_7326.PNG',
      '/assets/xuyao/IMG_7327.PNG',
      '/assets/xuyao/IMG_7328.PNG',
      '/assets/xuyao/IMG_7329.PNG',
      '/assets/xuyao/IMG_7330.PNG',
    ],
    '3': [
      '/assets/dhc/01.png',
      '/assets/dhc/02.png',
      '/assets/dhc/03.png',
      '/assets/dhc/04.png',
      '/assets/dhc/05.png',
      
    ],
    // '12': [

    // ]
  } as Record<string, string[]>
    
})

const itemId = ref(route.query.id);
const temData = state.parentObj[`${route.query.ct}BlogList`] as Record<string, Item[]>;
state.allBlogList = temData[`${route.query.tab}`];

state.mdFile = state.allBlogList.find(item => item.id === itemId.value)?.url || '';
const showCarousel = state.slideList[itemId.value as string] == null ? false : true;


</script>
<template>
    <section class="post-sec text-[var(--color-heading)]">
      <VueMarkdown :md-file-path="state.mdFile" />
      <Carousel v-show="showCarousel" v-bind="state.settings" :breakpoints="itemId === '1' ? state.breakpoints : {}">
        <Slide v-for="(slide, index) in state.slideList[itemId as string]" :key="index">
          <div class="carousel__item">
            <img :src="slide" alt="">
          </div>
        </Slide>
        
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
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
.carousel{
  width: 100% !important;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
}

</style>