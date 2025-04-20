import { isMicroApp } from '@/helper'
import { get } from 'lodash-es'

const storage = window.sessionStorage

const APP_ROOT_SESSION = 'APP_ROOT_SESSION' as const
const APP_SELF_SESSION = 'APP_new-icu_SESSION' as const

export const setStorageSession = (session: string) => {
  storage.setItem(APP_SELF_SESSION, session)
}

export const getStorageSession = () => {
  const KEY = !isMicroApp() ? APP_SELF_SESSION : APP_ROOT_SESSION

  return storage.getItem(KEY)
}

export const removeStorageSession = () => {
  storage.removeItem(APP_SELF_SESSION)
}

export const getStorageThemeFontSize = () => {
  const session = getStorageSession()

  if (session) {
    return get(JSON.parse(session), 'userInfo.fontSize')
  }

  return ''
}
