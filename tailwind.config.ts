import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
// primary: "rgb(var(--color-primary) / <alpha-value>)",
// text: "rgb(var(--color-text) / <alpha-value>)",
// success: "rgb(var(--color-success) / <alpha-value>)",
// info: "rgb(var(--color-info) / <alpha-value>)",
// warn: "rgb(var(--color-warn) / <alpha-value>)",
// error: "rgb(var(--color-error) / <alpha-value>)",
// transparent: "transparent",
// current: "currentColor",
export default {
  darkMode: 'selector',
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          primaryLight: "rgb(var(--color-primary-light) / <alpha-value>)"
      },
      textColor: {
        primaryText: "rgb(var(--color-text) / <alpha-value>)",
        secondaryText: colors.slate[400],
        // teriteryText: () => {return colors.gray[600].toString}
      }
    },
  },
  plugins: [],
} satisfies Config

