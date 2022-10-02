<template>

    <div class="p-5 flex flex-wrap gap-2">
        <nuxt-link v-for="content in data" :to="content._path">
            <div class="max-w-sm hover:shadow-lg transition-all cursor-pointer border rounded p-4 w-full">
                <h3 class="mb-5 text-purple-700 font-semibold text-2xl">{{content.title}}</h3>
                <small class="text-gray-500">{{content.description}}</small>
            </div>
        </nuxt-link>
    </div>
</template>


<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent().find())

definePageMeta({
    layout: "default"
})


</script>