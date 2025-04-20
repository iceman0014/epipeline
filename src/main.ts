import './styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
// import { ArtTransitHubs } from '@tdd/art-components'
import { isMicroApp } from './helper'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { globalRegister } from '@/global/index'

import Application from './App.vue'
import Router from './router'
import './api/api.setup'
import i18n from './i18n'

const CONTAINER = '#micro-new-icu-app'

let instance: ReturnType<typeof createApp>

function render(props: QiankunProps) {
  const { container } = props

  instance = createApp(Application)

  instance.use(Router)
  instance.use(createPinia())
  globalRegister(instance)

  instance.config.globalProperties.$t = (key: string) => {
    const { t } = i18n.global
    return t(key)
  }
  instance.use(i18n)

  // instance.use(ArtTransitHubs, {
  //   defaultPath: '/',
  //   resCode: import.meta.env.VITE_APP_CODE,
  //   router: Router,
  // })

  const element = container
    ? container.querySelector(CONTAINER)
    : document.querySelector(CONTAINER)

  instance.mount(element)
}

renderWithQiankun({
  mount(props) {
    console.log('[epipeline-customer-manage-system] mount')

    render(props)
  },
  bootstrap() {
    console.log('[epipeline-customer-manage-system] bootstrap')
  },
  unmount() {
    console.log('[epipeline-customer-manage-system] unmount')

    instance && instance.unmount()
  },
  update(props) {
    console.log('[epipeline-customer-manage-system] update')

    console.log(props)
  },
})

if (!isMicroApp()) {
  console.log('[new-icu application] Running independently!')

  render({})
}
