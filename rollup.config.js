import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Specify the manualChunks option to control chunking
        manualChunks(id) {
          // You can define custom chunking rules here
          if (id.includes('@tjoskar/react-lazyload-img')) {
            return 'lazyload-img'; // Create a separate chunk for LazyLoadImage
          }
          if (id.includes('@/components/')) {
            return 'components'; // Group components into a single chunk
          }
          if (id.includes('@/assets/')) {
            return 'assets'; // Group assets into a single chunk
          }
          if (id.includes('@/utils/')) {
            return 'utils'; // Group utility modules into a single chunk
          }
        },
      },
    },
  },
});