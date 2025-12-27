/// <reference types="vite/client" />
/// <reference path="./types/animejs.d.ts" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'animejs' {
  export default anime
  export * from 'animejs'
}
