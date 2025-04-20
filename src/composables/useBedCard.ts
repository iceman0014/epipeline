import { bedCardApi } from '@/api/modules/bedCard'

export default function useBedCard() {
  const loading = ref(false)
  const error = ref(null)
  const bedCardList = ref<API.BedCard[]>([])

  const fetchBedCardList = async () => {
    try {
      loading.value = true
      const res = await bedCardApi.getBedCardList()
      bedCardList.value = res
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchBedCardList()
  })

  return {
    loading,
    error,
    bedCardList,
    fetchBedCardList,
  }
}
