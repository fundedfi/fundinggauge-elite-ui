import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { neon: "#00ff99", neonDark: "#00cc7a", cyan: "#22d3ee" },
        // Cockpit design tokens
        sapphire: {
          deep: "#040d1a",
          base: "#0a1929",
        },
        platinum: "#e5e4e2",
        champagne: "#d4af37",
        bolt: "#1f90ff",
        emerald: "#50c878",
        amber: "#ffbf00",
        crimson: "#dc143c",
      },
      backgroundImage: {
        carbon:
          "repeating-linear-gradient(45deg,transparent 0 2px,rgba(255,255,255,.015) 2px 4px),repeating-linear-gradient(-45deg,transparent 0 2px,rgba(255,255,255,.012) 2px 4px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
