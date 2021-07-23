module.exports = {
  purge: {
    enabled: process.env.IS_BUILD === "yes",
    mode: "all",
    content: ["./src/client/**/*.ts", "./src/client/**/*.tsx", "./src/client/**/*.html"],
    whitelist: ["body", "html", "svg"],
    whitelistPatterns: [],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      header: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          lighter: '#4FD1C5',
          default: '#38B2AC',
          darker: '#319795',
        },
        secondary: {
          lighter: '#63B3ED',
          default: '#4299E1',
          darker: '#3182CE',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
    borderColor: [
      'dark',
      'dark-focus-within',
      'responsive',
      'hover',
      'focus',
      'focus-within',
    ],
    borderWidth: ['dark', 'responsive'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/custom-forms'),
  ],
}
