import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { MockInstance } from 'vitest'
import { bedCardApi } from '@/api/modules/bedCard'
import { request } from '@tdd/art-request'

// Mock the request module
vi.mock('@tdd/art-request', () => ({
  request: vi.fn(),
}))

describe('bedCardService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return a list of bed cards', async () => {
    const mockBedCardList = [
      {
        bedId: 'bed-001',
        bedNumber: 'ICU-01',
        department: '重症医科学',
        lastUpdated: Date.now(),
        patient: {
          id: 'p001',
          name: '张三',
          age: 65,
          hospitalId: 'H20240407001',
          bedNumber: 'ICU-01',
        },
      },
    ]
    // Mock the resolved value of the request
    ;(request as unknown as MockInstance).mockResolvedValue(mockBedCardList)

    const result = await bedCardApi.getBedCardList()
    expect(result).toEqual(mockBedCardList)
    expect(request).toHaveBeenCalledWith('/api/bedCardList', { method: 'get' })
  })

  it('should handle errors', async () => {
    // Mock the request to throw an error
    ;(request as unknown as MockInstance).mockRejectedValue(
      new Error('Network Error'),
    )

    await expect(bedCardApi.getBedCardList()).rejects.toThrow('Network Error')
  })
})
