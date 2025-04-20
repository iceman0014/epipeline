import echarts from './custom-echarts'
import type { CustomEchartsOption } from './custom-echarts'
import { CanvasRenderer } from 'echarts/renderers'

/**
 * 初始化echarts图表类
 */
export default class NewChart {
  // echart实例
  chartInstance: any = null
  // echart绑定的dom
  elRef: any
  autoChartSize = false
  animation = false
  theme = 'default'
  // 初始化图表
  initCharts = () => {
    const el = unref(this.elRef)
    if (!el || !unref(el)) {
      return
    }
    this.chartInstance = echarts.init(el, this.theme)
  }
  setOption = (option: CustomEchartsOption) => {
    nextTick(() => {
      if (!this.chartInstance) {
        this.initCharts()
        if (!this.chartInstance) return
      }

      this.chartInstance.setOption(option, true)
      this.hideLoading()
    })
  }

  // 获取echart实例
  getInstance = () => {
    if (!this.chartInstance) {
      this.initCharts()
    }
    return this.chartInstance
  }

  resize = () => {
    this.chartInstance?.resize()
  }

  // 监听元素大小
  // watchEl = () => {
  //   // 添加过渡
  //   if (this.animation) {
  //     this.elRef.value.style.transition = 'width 1s, height 1s'
  //   }
  //   const resizeObserver = new ResizeObserver((entries) => this.resize())
  //   resizeObserver.observe(this.elRef.value)
  // }

  // 显示加载
  showLoading = () => {
    if (!this.chartInstance) {
      this.initCharts()
    }
    this.chartInstance?.showLoading()
  }
  // 隐藏加载
  hideLoading = () => {
    if (!this.chartInstance) {
      this.initCharts()
    }
    this.chartInstance?.hideLoading()
  }

  constructor(
    elRef: any,
    autoChartSize?: boolean,
    animation?: boolean,
    theme?: string,
  ) {
    this.elRef = elRef
    if (autoChartSize) {
      this.autoChartSize = autoChartSize
    }
    if (animation) {
      this.animation = animation
    }
    if (theme) {
      this.theme = theme
    }
    // 设置渲染模式
    echarts.use(CanvasRenderer)
    onMounted(() => {
      window.addEventListener('resize', this.resize)
      // if (autoChartSize) this.watchEl()
    })

    onUnmounted(() => {
      window.removeEventListener('resize', this.resize)
    })
  }
}
