module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    enabled: true,
    content: ['index.html', 'src/**/*'],
    safelist: [],
    preserveHtmlElements: false,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
