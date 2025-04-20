import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

const vite_Config = viteConfig({
  command: process.env.COMMAND === 'serve' ? 'serve' : 'build',
  mode: process.env.NODE_ENV as string,
})
export default mergeConfig(
  vite_Config,
  defineConfig({
    test: {
      globals: true,
      silent: false, // 显示日志
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      onConsoleLog(log) {
        console.log(log)
        return false
      },
    },
  }),
)
