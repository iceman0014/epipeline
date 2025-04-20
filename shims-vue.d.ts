// src/shims-vue.d.ts

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $tr: (key: string) => string // 添加 $t 的类型声明
  }
}
