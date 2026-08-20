import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        /* React, ReactDOM, and the router account for most of the bundle and
           change only when a dependency is upgraded. Splitting them from the
           app chunk means a content edit invalidates ~100 KB instead of ~340 KB,
           so returning visitors re-download only what actually changed. */
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'vendor-react'
          if (/[\\/]node_modules[\\/](react-router|react-router-dom|@remix-run)[\\/]/.test(id)) {
            return 'vendor-router'
          }
        },
      },
    },
  },
})
