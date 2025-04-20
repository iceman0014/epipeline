import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BedCard from '@/components/business/bedCard/BedCardItem.vue'

describe('BedCard.vue', () => {
  it('should render correctly', () => {
    const cardData = {
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
    const wrapper = mount(BedCard, {
      props: {
        data: cardData,
      },
    })
    expect(wrapper.text()).toContain('张三')
    expect(wrapper.text()).toContain('ICU-01')
    expect(wrapper.text()).toContain('重症医科学')
    expect(wrapper.text()).toContain('床号：ICU-01')
    expect(wrapper.text()).toContain('科室：重症医科学')
    expect(wrapper.text()).toContain('床号：ICU-01')
  })
})
