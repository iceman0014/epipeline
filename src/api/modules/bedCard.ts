import type { BedCard } from '@/typings/BedCard'
import { request } from '@tdd/art-request'
import { setAuthorization } from '@tdd/art-request'

export const bedCardApi = {
  getBedCardList: async (): Promise<API.BedCard[]> => {
    setAuthorization('Bearer 1234567890')
    const res = await request<BedCard[]>('/bedCardList', { method: 'get' })
    console.log('res: ', res)
    return res
  },
}
