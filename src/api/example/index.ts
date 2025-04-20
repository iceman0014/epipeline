import { request } from '@tdd/art-request'
import type { Example } from './data'

export const requestExample = async (params?: API.QueryParams) => {
  return await request<Example[]>('examples', {
    params,
    method: 'post',
  })
}
