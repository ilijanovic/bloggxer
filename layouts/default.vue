<template>

    <div>
        <div class="border-b top-0 fixed flex w-full bg-white justify-between items-center  p-10">
            <nuxt-link class="text-3xl text-gray-700 font-semibold" to="/">
                Bloggxer
            </nuxt-link>
            <div>
                <nuxt-link to="/">
                    <Regular>Articles</Regular>
                </nuxt-link>

            </div>
        </div>

        <div class="mt-32">
            <slot></slot>
        </div>



    </div>
</template>

<script lang="ts" setup>
import Regular from '~~/components/buttons/regular.vue';

useHead({
    htmlAttrs: {
        lang: "en"
    },
    title:
        "Bloggxer: Explore a wide range of topics such as fitness, technology and much more",
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
            hid: "description",
            name: "description",
            content:
                "On bloggxer you will find blog articles about various interesting topics such as fitness, technology, cooking and much more.",
        },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

})

</script>
<style>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
