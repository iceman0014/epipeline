import { User } from '@tdd/art-api'
import { cas } from '@tdd/art-utils'
import { Menu } from '@tdd/art-api'

export const requestSignin = async (ticket: string) => {
  const service = cas.getService()

  return await User.signin({ ticket, service })
}

export const requestMenu = async () => {
  return await Menu.list('menulist')
}
