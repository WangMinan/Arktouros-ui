import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    publicDir: 'public',
    plugins: [
        vue(),
        // 启用顶级js文件中的await
        topLevelAwait({
            // The export name of top-level await promise for each chunk module
            promiseExportName: '__tla',
            // The function to generate import names of top-level await promise in each chunk module
            promiseImportName: i => `__tla_${i}`
        })
    ],
    server: {
        port: 27070,
        host: '0.0.0.0'
    },
    preview: {
        port: 7070
    },
    build: {
        // 构建打包时规范js文件大小
        chunkSizeWarningLimit: 500,
        rollupOptions: {
            output: {
                // eslint-disable-next-line consistent-return
                manualChunks (id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
