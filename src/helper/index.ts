import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

export const isMicroApp = () => qiankunWindow.__POWERED_BY_QIANKUN__

export const isDevelopment = () => !!import.meta.env.DEV
