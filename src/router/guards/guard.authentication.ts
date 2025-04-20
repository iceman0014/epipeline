import { useSessionStore } from '@/stores'
import { isMicroApp } from '@/helper'
import type { Router } from 'vue-router'

const setupAuthentication = (router: Router) => {
  router.beforeEach(async (to, _, next) => {
    const store = useSessionStore()
    await store.initial()

    if (store.isRs7) {
      try {
        const {
          meta: { excludeAuth = false },
        } = to
        if (excludeAuth || isMicroApp()) {
          next()
          return
        }

        if (store?.logged) {
          //集成到RS7里
          if (to.name != 'home') {
            next({ name: 'home' })
          } else {
            next()
          }
        } else {
          next()
        }
      } catch (error) {
        throw new Error()
      }
    } else {
      // 单独部署
      const token = '123456' //localStorage.getItem('token')
      if (token) {
        next()
      } else {
        if (to.name != 'login') {
          next({ name: 'login' })
        } else {
          next()
        }
      }
    }
  })
}

export default setupAuthentication
