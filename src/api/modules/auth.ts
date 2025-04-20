import { request } from '@tdd/art-request'
import { setAuthorization } from '@tdd/art-request'
export const requestAuth = async (ticket: string, service: string) => {
  try {
    const response = await request<API.AuthType>('/v1/ticket/validate', {
      method: 'get',
      params: {
        ticket,
        service,
      },
    })
    console.log('response: ', response)
    response.tokenValue && setAuthorization(response.tokenValue)
    response.tokenValue && localStorage.setItem('token', response.tokenValue)
    return response
  } catch (error) {
    console.error('Failed to validate ticket:', error)
    throw error
  }
}
