<template>
  <div class="p-10">
    <ContentDoc class="prose doc mx-auto prose-slate" />
  </div>


</template>
<script lang="ts" setup>

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

useJsonld({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": data.value.title,
  "author": [{
    "@type": "Person",
    "name": "Ilija Marijanovic",
    "url": "http://example.com/profile/janedoe123"
  }]
});
</script>


