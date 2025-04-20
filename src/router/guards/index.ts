import setupAuthentication from './guard.authentication'
import type { Router } from 'vue-router'

export default function createRouterGuards(router: Router) {
  setupAuthentication(router)
  return router
}

export { createRouterGuards }
