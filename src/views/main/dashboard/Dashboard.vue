<template>
  <div class="chart-container">
    <div ref="barChart" class="bar-chart"></div>
    <!-- ECharts 容器 -->
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts' // 引入 ECharts

const barChart = ref(null) // 创建引用

const initBarChart = () => {
  const chartInstance = echarts.init(barChart.value) // 初始化图表实例

  const option = {
    title: {
      text: '仪表盘',
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['新增', '完成', '未完成'], // X 轴数据
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10], // Y 轴数据
      },
    ],
  }

  chartInstance.setOption(option) // 设置图表选项
}

onMounted(() => {
  initBarChart() // 组件挂载后初始化图表
})
</script>

<style scoped>
.chart-container {
  width: 40%;
  height: 400px; /* 设置图表高度 */
}

.bar-chart {
  width: 100%;
  height: 100%;
}
</style>
