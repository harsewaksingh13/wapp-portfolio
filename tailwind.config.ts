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
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // textColor: {
      //   primary: "rgb(var(--color-text) / <alpha-value>)",
      //   secondary: colors.gray[600]
      // }
    },
  },
  plugins: [],
} satisfies Config

