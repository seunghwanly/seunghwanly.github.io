/**
 * Tailwind runs through PostCSS so both build pipelines pick it up:
 * `vinext build` (Vite/Cloudflare) and `build:pages` (next build).
 * A Vite-only plugin would skip the GitHub Pages export.
 */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
