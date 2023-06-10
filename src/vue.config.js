module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/assets/scss/functions.scss";
            @import "@/assets/scss/media.scss";
            @import "@/assets/global.scss";
            @import "@/assets/scss/header.scss";
          `,
      },
    },
  },
};
