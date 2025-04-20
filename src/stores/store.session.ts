import { defineStore } from 'pinia'
import { theme } from '@tdd/art-utils'
import { User } from '@tdd/art-api'
import { setStorageSession } from '@/helper/helper.storage'
import type { Session } from '@tdd/art-api'
import { getConfig } from '@/helper/helper.config'
import { requestAuth } from '@/api/modules/auth'
import type API from '@/typings/api'

export interface SessionState {
  session: Partial<Session>
}

export const useSessionStore = defineStore('session', () => {
  const state = reactive<SessionState>({ session: {} })
  const authInfo = reactive<API.AuthInfo>({})
  const logged = computed(() => !!Object.keys(authInfo).length)
  const isRs7 = ref(null)

  async function initial() {
    if (isRs7.value === null) {
      //判断是否为rs7部署，刷新页面时会从新获取
      await fetchConfig()
      if (isRs7.value) {
        await fetchQueryParams()
        await fetchToken()
      }
    }
  }

  //获取配置文件 判断是否为rs7部署
  async function fetchConfig() {
    try {
      const config = await getConfig()
      isRs7.value = config.features.is_rs7
    } catch (error) {
      console.error('Failed to fetch config:', error)
    }
  }
  //获取session信息
  async function fetchSession() {
    try {
      console.log('fetch session: ')
      const response = await User.session()
      console.log('user session: ', response)

      if (response) {
        const session = JSON.stringify(response)

        state.session = response
        theme.toToggleFontSize(response.userInfo.fontSize)
        setStorageSession(session)
      }

      return Promise.resolve(true)
    } catch (error) {
      return Promise.reject(false)
    }
  }

  //获取跳转后url中的ticket参数
  let ticket = ''
  function fetchQueryParams() {
    const urlParam = new URLSearchParams(window.location.search)
    const _ticket = urlParam.get('ticket') || ''
    // console.log('fetchQueryParams: ', _ticket)
    // localStorage.setItem('_ticket-st', _ticket)
    ticket = _ticket
  }

  //获取token
  async function fetchToken() {
    try {
      if (!ticket) {
        return
      }
      const url = window.location.href
      const service = removeParamsCasAndIndex(url)
      const res = await requestAuth(ticket, service)
      authInfo.value = res
      console.log('fetch token success: ', res)
    } catch (err) {
      console.error('fetch token failed: ', err)
    }
  }

  function removeParamsCasAndIndex(url: string) {
    // 解析url
    const decodeUrl = decodeURIComponent(url)
    //创建url对象
    const parseUrl = new URL(decodeUrl)
    //获取url路径部分
    const pathParts = parseUrl.pathname.split('/')
    //过滤掉cas和url部分
    const filteredPathParts = pathParts.filter(
      part => part !== 'cas' && part !== 'index',
    )

    // 重新构建url
    const newPath = filteredPathParts.join('/')
    const newUrl = `${parseUrl.protocol}//${parseUrl.host}${newPath}`
    return newUrl
  }
  return {
    logged,
    isRs7,
    initial,
    fetchSession,
    fetchQueryParams,
    fetchToken,
  }
})
