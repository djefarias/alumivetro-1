import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0f172a", light: "#1e293b" },
        accent: "#38bdf8",
        "accent-dark": "#0284c7",
      },
    },
  },
  plugins: [],
}
export default config
