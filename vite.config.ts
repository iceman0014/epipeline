import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'

import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import compressPlugin from 'vite-plugin-compression'
import artPluginCss from '@tdd/vite-plugin-art-css'
import artPluginInject from '@tdd/vite-plugin-art-inject'
import type { Drop } from 'esbuild'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => {
  const { VITE_GATEWAY_API, VITE_API } = loadEnv(mode, process.cwd())
  const isProduction = process.env.NODE_ENV !== 'development'
  const isLocalBuild = mode === 'localbuild'
  const drop: Drop[] = isProduction ? [] : [] //['console', 'debugger']

  return {
    base: isProduction ? '/micro/epipeline-customer-manage-system/' : '/',
    server: {
      port: 8099,
      host: '0.0.0.0',
      proxy: {
        '/auth': {
          target: VITE_API,
          changeOrigin: true,
        },
        '/api': {
          target: VITE_GATEWAY_API,
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue({
        script: {
          propsDestructure: true,
          defineModel: true,
        },
        template: {
          compilerOptions: {
            // 告诉编译器不要将这些视为自定义元素
            isCustomElement: () => false,
          },
        },
      }),
      qiankun('epipeline-customer-manage-system', { useDevMode: true }),
      compressPlugin(),
      artPluginCss(),
      artPluginInject({ mock: true }),
      isLocalBuild &&
        visualizer({
          emitFile: false,
          filename: 'report.html',
          open: false,
          gzipSize: true,
          brotliSize: false,
        }),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
        resolvers: [AntDesignVueResolver()],
      }),
      Components({
        extensions: ['vue'], // 支持Vue和JSX组件
        resolvers: [
          AntDesignVueResolver({ importStyle: false }),
          {
            type: 'component',
            resolve: name => {
              const artMatch = /^Art[A-Z]\w+/
              if (artMatch.test(name)) {
                return {
                  from: '@tdd/art-ui',
                  name,
                }
              }
            },
          },
          {
            type: 'component',
            resolve: name => {
              const artComponentsMatch = /^ArtComponents[A-Z]\w+/
              if (artComponentsMatch.test(name)) {
                return {
                  from: '@tdd/art-components',
                  name,
                }
              }
            },
          },
        ],
        deep: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    esbuild: {
      drop,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: id => {
            // ant-design-vue 相关依赖
            if (id.includes('node_modules/ant-design-vue')) {
              return 'antd'
            }
            // vue 相关依赖
            if (
              id.includes('node_modules/vue') ||
              id.includes('node_modules/vue-router') ||
              id.includes('node_modules/pinia')
            ) {
              return 'vue'
            }
            // SVG 组件
            if (id.includes('/src/components/svgs/')) {
              return 'icons'
            }
          },
        },
      },
    },
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('node_modules')) {
    //           // 常用依赖打包到 common 文件中
    //           const commonDeps = ['vue', 'vue-router', 'pinia', 'axios'];
    //           if (commonDeps.some(dep => id.includes(dep))) {
    //             return 'common';
    //           }
    //           // 其他依赖打包到 vendor 文件中
    //           return 'vendor';
    //         }
    //       },
    //     },
    //   },
    // },
  }
})
