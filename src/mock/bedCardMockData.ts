export const mockBedCardData: API.BedCard = {
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
}
//生成多个床位的数据
export const generateBedCards = (count: number): API.BedCard[] => {
  return Array.from({ length: count }, (_, index) => ({
    ...mockBedCardData,
    bedId: `bed-${String(index + 1).padStart(3, '0')}`,
    bedNumber: `ICU-${String(index + 1).padStart(2, '0')}`,
    department: `重症医科学${String(index + 1).padStart(2, '0')}`,
    lastUpdated: Date.now() + index * 1000 * 60 * 60 * 24,
    patient: {
      ...mockBedCardData.patient,
      id: `p${String(index + 1).padStart(3, '0')}`,
      name: `患者${index + 1}`,
      age: 65 + index,
      hospitalId: `H2024${String(index + 1).padStart(3, '0')}`,
      bedNumber: `ICU-${String(index + 1).padStart(2, '0')}`,
    },
  }))
}
