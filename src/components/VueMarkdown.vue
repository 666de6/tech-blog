<!--
 * @Author: Ada J
 * @Date: 2023-08-03 14:06:26
 * @LastEditTime: 2023-10-14 15:21:20
 * @Description: 
-->
<script setup lang="ts">
import { marked } from 'marked';
import { ref } from 'vue';

// Set options
marked.use({
  pedantic: false,
  gfm: true,
});

const props = defineProps<{
  mdFilePath: string
}>()
const content = ref('');
const blogUrl = ref('');
blogUrl.value = props.mdFilePath ? props.mdFilePath : '/blogs/404.md'
fetch(blogUrl.value)
  .then(response => {
    return response.blob()
  })
  .then(blob => blob.text())
  .then(markdown => {
    content.value = marked.parse(markdown);
  });
</script>
<template>
  <div v-html="content"></div>
</template>
<style scoped>
</style>