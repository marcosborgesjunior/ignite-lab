module.exports = {
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue', 'vuetify']
    }
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
