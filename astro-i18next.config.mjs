/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "it", "ru", "uk"],
  routes: {
    en: {
      pricing: "pricing",
      login: "login",
      blog: {
        index: "blog",
        categories: "categories",
        tags: "tags",
      },
    },
    fr: {
      pricing: "pricing",
      login: "login",
      blog: {
        index: "blog",
        categories: "categories",
        tags: "tags",
      },
    },
    ru: {
      pricing: "цена",
      login: "login",
      blog: {
        index: "blog",
        categories: "categories",
        tags: "tags",
      },
    },
    uk: {
      pricing: "ціна",
      login: "login",
      blog: {
        index: "blog",
        categories: "categories",
        tags: "tags",
      },
    },
  },
  i18nextServer: {
    debug: true,
  },
};
