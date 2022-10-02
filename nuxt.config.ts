import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-jsonld"],

  head: {
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
  },
});
