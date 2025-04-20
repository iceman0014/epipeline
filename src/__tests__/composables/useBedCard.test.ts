import { describe, it, expect, vi, beforeEach } from 'vitest'
import useBedCard from '@/composables/useBedCard'
import { bedCardApi } from '@/api/modules/bedCard'

// Mock the bedCardApi module
vi.mock('@/api/modules/bedCard', () => ({
  bedCardApi: {
    getBedCardList: vi.fn(),
  },
}))

describe('useBedCard', () => {
  const mockData = [
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
  beforeEach(() => {
    vi.clearAllMocks()
    ;(
      bedCardApi.getBedCardList as unknown as ReturnType<typeof vi.fn>
    ).mockResolvedValue(mockData)
  })

  it('should fetch bed card list', async () => {
    // Mock the API call
    // vi.mocked(bedCardApi.getBedCardList).mockResolvedValueOnce(mockData)

    const { loading, bedCardList, fetchBedCardList } = useBedCard()
    await fetchBedCardList()
    expect(loading.value).toBe(false)
    expect(bedCardList.value).toEqual(mockData)
    expect(bedCardApi.getBedCardList).toHaveBeenCalled()
  })

  it('should handle error when fetching bed card list', async () => {
    const mockError = new Error('Failed to fetch bed card list')
    const { fetchBedCardList, error } = useBedCard()
    ;(
      bedCardApi.getBedCardList as unknown as ReturnType<typeof vi.fn>
    ).mockRejectedValueOnce(mockError)

    await fetchBedCardList()
    expect(error.value).toBe(mockError)
  })
})
