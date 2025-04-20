/// <reference types="vite/client" />
/// <reference types="@tdd/vite-plugin-art-config/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_APP_CODE: string
  readonly VITE_GATEWAY_API: string
  readonly VITE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
