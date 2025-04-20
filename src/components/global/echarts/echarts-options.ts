// import { registerUpdateLifecycle } from 'echarts/core'
import type { CustomEchartsOption } from './custom-echarts'

const BAR_OPTIONS: CustomEchartsOption = {
  title: {
    text: '研究中心课题数',
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {},
  color: ['#f39423'],
  series: [
    {
      name: '课题数',
      type: 'bar',
      colorBy: 'data',
      barWidth: '60%',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const HORIZONTAL_BAR_OPTIONS: CustomEchartsOption = {
  title: {
    text: '各研究中心质控进度',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'value',
    },
  ],
  yAxis: [
    {
      type: 'category',
      inverse: true, //是否是反向坐标轴
    },
  ],
  color: ['#5087ec', '#68bbc4'],
  series: [
    {
      name: '已质控',
      type: 'bar',
      barWidth: '60%',
      stack: 'Ad',
    },
    {
      name: '未质控',
      type: 'bar',
      barWidth: '60%',
      stack: 'Ad',
    },
  ],
}

const PROJECT_PIE_OPTIONS: CustomEchartsOption = {
  title: {
    text: '各研究中心数据占比',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    top: 'middle',
  },
  series: [
    {
      type: 'pie',
      left: 'center',
      radius: ['0', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      labelLine: {
        length2: 10,
        length: 15,
        smooth: true,
      },
      label: {
        show: false,
        fontSize: '12',
        fontWeight: 'bold',
        alignTo: 'labelLine',
      },
      emphasis: {},
      data: [],
    },
  ],
}

const PROJECT_HORIZONTAL_BAR_OPTIONS: CustomEchartsOption = {
  title: {
    text: 'XX医院随访进度',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  xAxis: [
    {
      type: 'category',
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  color: ['#dedede', '#409eff', '#f56c6c'],
  series: [
    {
      name: '已失访',
      type: 'bar',
      label: {
        show: true,
        color: '#dedede',
        position: 'top',
      },
    },
    {
      name: '已随访',
      type: 'bar',
      label: {
        show: true,
        color: '#409eff',
        position: 'top',
      },
    },
    {
      name: '未随访',
      type: 'bar',
      label: {
        show: true,
        color: '#f56c6c',
        position: 'top',
      },
    },
  ],
}

const PROJECT_BAR_OPTIONS: CustomEchartsOption = {
  title: {
    text: '总体数据元缺失情况',
  },
  dataset: {
    source: [],
  },
  grid: {
    left: '1%',
    right: '18%',
    bottom: '3%',
    containLabel: true,
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    top: 'middle',
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {},
  color: ['#3f95c2'],
  series: [
    {
      name: '缺失数据',
      type: 'bar',
      colorBy: 'data',
      barWidth: '60%',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const PROJECT_LINE_OPTIONS: CustomEchartsOption = {
  title: {
    text: '医院数据缺失情况',
  },
  dataset: {
    source: [],
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {},
  series: [
    {
      type: 'line',
      smooth: true,
      colorBy: 'data',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// =======================================================================================
// 收支情况
const SZQK_OPTIONS: CustomEchartsOption = {
  title: {
    // text: '医院随访',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  yAxis: [
    {
      type: 'value',
      name: '患者数量',
    },
  ],
  xAxis: [
    {
      type: 'category',
    },
  ],
  color: ['#0b75fc', '#81C463'],
  series: [
    {
      name: ' 今年',
      type: 'bar',
      barWidth: '20%',
    },
    {
      name: '去年',
      type: 'bar',
      barWidth: '20%',
    },
  ],
}
// 收治人数
const SZRS_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '20',
    containLabel: true,
  },
  // legend: {
  // orient: 'horizontal',
  // top: '40',
  // right: '10'
  // },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {
    type: 'value',
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '人数',
      type: 'bar',
      colorBy: 'data',
      barWidth: '30%',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 患者来源
const HZLY_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '40',
    containLabel: true,
  },
  dataset: {
    source: [],
  },
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 40, fontSize: 10 },
  },
  yAxis: {
    type: 'value',
    name: '患者数量',
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '患者数量',
      type: 'bar',
      colorBy: 'data',
      barWidth: '20%',
      // label: {
      //   show: true,
      //   position: 'top',
      // },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 评分人次 Apache评分
const PFRC_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '6%',
    right: '2%',
    bottom: '0',
    top: '40',
    containLabel: true,
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0, rotate: 20 } },
  yAxis: {
    type: 'value',
    name: '评分人次',
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '评分人次',
      type: 'bar',
      colorBy: 'data',
      barWidth: '30%',
      // label: {
      //   show: true,
      //   position: 'top',
      // },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 收支情况
const RCQK_OPTIONS: CustomEchartsOption = {
  title: {
    // text: '医院随访',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '40',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '0',
  },
  yAxis: [
    {
      type: 'value',
    },
  ],
  xAxis: [
    {
      type: 'category',
    },
  ],
  color: ['#0b75fc', '#79bbff', '#a0cfff'],
  series: [
    {
      name: '气管插管',
      type: 'bar',
      barGap: 0,
      barWidth: '20%',
    },
    {
      name: '中心静脉置管',
      type: 'bar',
      barWidth: '20%',
    },
    {
      name: '尿道管人次',
      type: 'bar',
      barWidth: '20%',
    },
  ],
}
//apache2评分分布
const APACHE2_SCORE_OPTIONS: CustomEchartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '40',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '0',
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  color: ['#E6A23C'],
  series: [
    {
      // data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {},
      label: {
        show: true,
      },
    },
  ],
}

// 设备使用情况
const SBSYQK_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '20',
    containLabel: true,
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    name: '( % ) ',
    axisLabel: {
      formatter: '{value}%',
    },
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '使用情况',
      type: 'bar',
      colorBy: 'data',
      barWidth: '40%',
      label: {
        show: true,
        position: 'right',
        formatter: function (value: any) {
          return value.data.num + '%'
        },
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 呼吸机使用概况
const HXJ_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '50',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    // right: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc', '#81C463'],
  series: [
    {
      name: '呼吸机',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: '监护仪',
      type: 'bar',
      stack: 'total',
      barWidth: '50%',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 科室设备使用概况
const KSSB_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '50',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc', '#F14C52'],
  series: [
    {
      name: '在线',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: '离线',
      type: 'bar',
      stack: 'total',
      barWidth: '20%',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 器械感染发病率
const QXGRFBL_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    // text: '医院随访',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
  },
  yAxis: [
    {
      type: 'value',
      // name: '( % ) ',
      axisLabel: {
        formatter: '{value}%',
      },
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },
    },
  ],
  color: ['#105AFB', '#83C8EF', '#58B92C', '#EF5459'],
  series: [
    {
      name: '病原学送检率',
      type: 'bar',
      barGap: 0,
      barWidth: '10%',
    },
    {
      name: 'VAP感染数',
      type: 'bar',
      barWidth: '10%',
    },
    {
      name: 'CRBSI感染率',
      type: 'bar',
      barWidth: '10%',
    },
    {
      name: 'CAUTI感染率',
      type: 'bar',
      barWidth: '10%',
    },
  ],
}
// const QXGRFBL_DATA_OPTIONS: CustomEchartsOption = {
//   title: {
//     text: '',
//   },
//   grid: {
//     left: '10%',
//     right: '10%',
//     bottom: '0',
//     top: '80',
//     containLabel: true,
//   },
//   xAxis: { type: 'category', axisLabel: { interval: 0 } },
//   yAxis: {
//     type: 'value',
//     name: '( % ) ',
//     axisLabel: {
//       formatter: '{value}%',
//     },
//     axisLine: {
//       show: true,
//     },
//   },
//   color: ['#0b75fc'],
//   series: [
//     {
//       name: '发病率',
//       type: 'bar',
//       colorBy: 'data',
//       barWidth: '30%',
//       label: {
//         show: true,
//         position: 'top',
//         formatter: function (value: any) {
//           return value.data.num + '%'
//         },
//       },
//     },
//   ],
//   tooltip: {
//     trigger: 'axis',
//   },
// }

//非计划转入ICU率
const ZR_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '5%',
    right: '10%',
    bottom: '20',
    top: '60',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    // right: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
    // name: '( % ) ',
    axisLabel: {
      formatter: '{value}%',
    },
  },
  color: ['#FCA400'],
  series: [
    {
      // name: '进行疾病防治人数',
      name: '',
      type: 'bar',
      stack: 'total',
      barWidth: '12%',
      label: {
        show: true,
        color: 'white',
        formatter: function (value: any) {
          return value.data.value1 + '%'
        },
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        borderRadius: [0, 20, 20, 0],
      },
    },
    // {
    //   name: '未进行疾病防治人数',
    //   type: 'bar',
    //   stack: 'total',
    //   barWidth: '50%',
    //   label: {
    //     show: true,
    //     formatter: function (value: any) {
    //       return value.data.value2 + '%'
    //     },
    //   },
    //   emphasis: {
    //     focus: 'series',
    //   },
    // },
  ],
  tooltip: {
    trigger: 'axis',
  },
}
//转出ICU后48h内重返率
const ZC_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '5%',
    right: '10%',
    bottom: '20',
    top: '40',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    // right: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
    // name: '( % ) ',
    axisLabel: {
      formatter: '{value}%',
    },
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '48H重返率',
      type: 'bar',
      stack: 'total',
      barWidth: '30%',
      label: {
        show: true,
        formatter: function (value: any) {
          return value.data.value1 + '%'
        },
      },
      emphasis: {
        focus: 'series',
      },
    },
    // {
    //   name: '未进行疾病防治人数',
    //   type: 'bar',
    //   stack: 'total',
    //   barWidth: '50%',
    //   label: {
    //     show: true,
    //     formatter: function (value: any) {
    //       return value.data.value2 + '%'
    //     },
    //   },
    //   emphasis: {
    //     focus: 'series',
    //   },
    // },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

//icu镇痛、镇静评估率
const ZT_ZJ_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '5%',
    right: '10%',
    bottom: '20',
    top: '40',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    // right: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
    // name: '( % ) ',
    axisLabel: {
      formatter: '{value}%',
    },
  },
  color: ['#0b75fc', '#72BBEA'],
  series: [
    {
      name: '镇痛评估率',
      type: 'bar',
      // stack: 'total',
      barWidth: '12%',
      label: {
        show: true,
        formatter: function (value: any) {
          return value.data.value1 + '%'
        },
      },
      itemStyle: {
        borderRadius: [0, 20, 20, 0],
      },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: '镇静评估率',
      type: 'bar',
      // stack: 'total',
      barWidth: '12%',
      label: {
        show: true,
        formatter: function (value: any) {
          return value.data.value2 + '%'
        },
      },
      itemStyle: {
        borderRadius: [0, 20, 20, 0],
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}
// 病死率
const BSQK_OPTIONS: CustomEchartsOption = {
  title: {
    // text: '医院随访',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
  },
  yAxis: [
    {
      type: 'value',
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },
    },
  ],
  color: ['#105AFB', '#83C8EF', '#58B92C', '#EF5459'],
  series: [
    {
      name: '预计病死率',
      type: 'bar',
      barGap: 0,
      barWidth: '10%',
    },
    {
      name: '实际病死例数',
      type: 'bar',
      barWidth: '10%',
    },
    {
      name: '实际病死率',
      type: 'bar',
      barWidth: '10%',
    },
    {
      name: '病死指数',
      type: 'bar',
      barWidth: '10%',
    },
  ],
}

// DVT预防率
const DVT_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '60',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    // right: '10',
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0, rotate: 30 } },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}%',
    },
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc', '#F14C52'],
  series: [
    {
      name: '已防治',
      type: 'bar',
      stack: 'total',
      barWidth: '12%',
      // label: {
      //   show: true,
      // },
      emphasis: {
        focus: 'series',
      },
    },
    {
      name: '未防治',
      type: 'bar',
      stack: 'total',
      barWidth: '12%',
      // label: {
      //   show: true,
      // },
      emphasis: {
        focus: 'series',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

// 仪表盘
const YBP_DATA_OPTIONS: CustomEchartsOption = {
  series: [
    {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 16,
          color: [
            [0.3, '#81C463'],
            [0.7, '#0b75fc'],
            [1, '#F14C52'],
          ],
        },
      },
      pointer: {
        itemStyle: {
          color: 'auto',
        },
      },
      axisTick: {
        distance: -16,
        length: 5,
        lineStyle: {
          color: '#fff',
          width: 1,
        },
      },
      splitLine: {
        distance: -30,
        length: 40,
        lineStyle: {
          color: '#fff',
          width: 2,
        },
      },
      axisLabel: {
        color: 'inherit',
        distance: 10,
        fontSize: 12,
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}%',
        color: '#0b75fc',
        fontSize: 20,
      },
      data: [
        {
          value: 70,
        },
      ],
    },
  ],
}

// 专病管理
const ZB_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '30',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '10',
    show: false,
    // right: '10',
  },
  dataset: {
    source: [],
  },
  yAxis: { type: 'category', axisLabel: { interval: 0 } },
  xAxis: {
    type: 'value',
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '数量',
      type: 'bar',
      stack: 'total',
      barWidth: '40%',
      label: {
        show: true,
      },
      emphasis: {
        focus: 'series',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}
//诊断分布
const ZDFB_OPTIONS: CustomEchartsOption = {
  title: {
    text: '入科',
    subtext: '1000人',
    left: '49%',
    top: '36%',
    textAlign: 'center',
    textStyle: {
      fontSize: 20,
    },
    subtextStyle: {
      fontSize: 22,
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    top: 'center',
    textStyle: {
      fontSize: 16,
    },
    itemWidth: 20,
    itemHeight: 10,
  },
  series: [
    {
      name: '占比',
      type: 'pie',
      radius: [60, 90],
      itemStyle: {
        borderRadius: 2,
      },
      data: [],
      // label: {
      //   fontSize: 16,
      // },
      labelLine: {
        show: true,
        // length: 1,
        // length2: 10,
        // minTurnAngle: 15,
        lineStyle: {
          type: 'dashed',
          width: 1,
        },
      },
    },
  ],
}

// 质控-急诊-柱状图
const EMG_DATA_OPTIONS: CustomEchartsOption = {
  title: {
    text: '',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '0',
    top: '80',
    containLabel: true,
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {
    type: 'value',
    name: '时长/h ',
    axisLine: {
      show: true,
    },
  },
  color: ['#0b75fc'],
  series: [
    {
      name: '时长',
      type: 'bar',
      colorBy: 'data',
      barWidth: '20%',
      label: {
        show: true,
        position: 'top',
        formatter: function (value: any) {
          return value.data.num
        },
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const QUALITY_CONTROL_OPTIONS: CustomEchartsOption = {
  title: {
    text: '医院质控排名',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0 } },
  yAxis: {},
  series: [
    {
      name: '质控数量',
      type: 'line',
      smooth: true,
      colorBy: 'data',
      label: {
        show: true,
        position: 'top',
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
  },
}

const MISSING_NUMBER_OPTIONS: CustomEchartsOption = {
  title: {
    text: '医院指控进度',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  xAxis: [
    {
      type: 'value',
    },
  ],
  yAxis: [
    {
      type: 'category',
      inverse: true, //是否是反向坐标轴
    },
  ],
  color: ['#67c23a', '#cecece'],
  series: [
    {
      name: '完成',
      type: 'bar',
      barWidth: '60%',
      stack: 'Ad',
      label: {
        show: true,
        color: '#ffffff',
        formatter: '{@num1}%',
      },
    },
    {
      name: '未完成',
      type: 'bar',
      barWidth: '60%',
      stack: 'Ad',
      label: {
        show: true,
        color: '#ffffff',
        formatter: '{@num2}%',
      },
    },
  ],
}

const UPLOAD_COUNT_OPTIONS: CustomEchartsOption = {
  title: {
    text: '医院患者预后',
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '80',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    orient: 'horizontal',
    top: '40',
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', data: ['出科预后', '出院预后'] },
  yAxis: {},
  color: ['#83C8EF', '#cecece'],
  series: [
    {
      name: '好转',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      data: [10, 8],
    },
    {
      name: '死亡',
      type: 'bar',
      stack: 'total',
      label: {
        show: true,
      },
      data: [15, 6],
    },
  ],
}

//患者死亡率
const PIE_SWL_OPTIONS: CustomEchartsOption = {
  tooltip: {
    trigger: 'item',
    confine: true,

    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    right: '10',
    top: 'center',
    type: 'scroll',
    pageButtonItemGap: 5,
  },
  // color: ['#cecece', '#F14C52'],
  series: [
    {
      name: '',
      type: 'pie',
      radius: [40, 60],
      itemStyle: {
        borderRadius: 2,
      },
      data: [],
      label: {
        show: true,
        position: 'center', // 展示在中间位置
        padding: [6, 0, 0, 0],
        rich: {
          a: {
            color: '#0b75fc',
            fontSize: 26,
            fontWeight: 900,
          },
          b: {
            fontSize: 14,
            fontWeight: 400,
            color: '#6B7280',
          },
          bS: {
            fontSize: 12,
            fontWeight: 700,
            color: '#6B7280',
          },
        },
      },
      labelLine: {
        show: true,
        length: 1,
        length2: 10,
        minTurnAngle: 15,
        lineStyle: {
          type: 'dashed',
          width: 0.5,
        },
      },
    },
  ],
}
//质控中心
const PIE_SLJK_OPTIONS: CustomEchartsOption = {
  tooltip: {
    trigger: 'item',
    confine: true,
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    // position: ['30%', '0%']
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    // bottom: 'center',
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: '65%',
      label: {
        show: true,
        position: 'inside',
        fontSize: 18, //
        rich: {
          a: {
            color: '#0b75fc',
            fontSize: 26,
            fontWeight: 900,
          },
          b: {
            fontSize: 14,
            fontWeight: 400,
            color: '#6B7280',
          },
          bS: {
            fontSize: 12,
            fontWeight: 700,
            color: '#6B7280',
          },
        },
      },
      labelLine: {
        show: true,
        length: 1,
        length2: 10,
        minTurnAngle: 15,
        lineStyle: {
          type: 'dashed',
          width: 0.5,
        },
      },
    },
  ],
}
//=========================我的科研首页========================================================
const PIE_OPTIONS: CustomEchartsOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    top: 'center',
    // textStyle: {
    //   fontSize: 16,
    // },
    // itemWidth: 20,
    // itemHeight: 10,
  },
  series: [
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [30, 60],
      itemStyle: {
        borderRadius: 2,
      },
      data: [
        { value: 30, name: 'rose 1' },
        { value: 28, name: 'rose 2' },
        { value: 26, name: 'rose 3' },
        { value: 24, name: 'rose 4' },
      ],
      labelLine: {
        show: true,
        length: 1,
        length2: 10,
        minTurnAngle: 15,
        lineStyle: {
          type: 'dashed',
          width: 0.5,
        },
      },
    },
  ],
}

const DATA_HIATUS_OPTIONS: CustomEchartsOption = {
  title: {
    text: '总缺失情况',
    textStyle: {
      fontSize: 16,
      color: '#000a7b',
    },
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '20',
    top: '60',
    containLabel: true,
  },
  legend: {
    show: false,
    orient: 'horizontal',
    top: '30',
    itemGap: 4,
    itemWidth: 14,
    textStyle: {
      fontSize: 10,
    },
  },
  dataset: {
    source: [],
  },
  xAxis: { type: 'category', axisLabel: { interval: 0, rotate: 38 } },
  yAxis: {
    min: 0,
    max: 100,
  },
  color: ['#5087ec'],
  series: [
    {
      name: '缺失量',
      type: 'bar',
      colorBy: 'data',
      barWidth: '60%',
      label: {
        show: false,
        position: 'top',
      },
      data: [],
    },
  ],
  tooltip: {
    show: true,
    formatter: '{b}: <br />&nbsp;&nbsp;{a}&nbsp;&nbsp;&nbsp;&nbsp;{c}%',
  },
}

//=========================专病库首页========================================================
const HOME_PIE_OPTIONS: CustomEchartsOption = {
  title: {
    show: false,
    text: '总随访情况',
    textStyle: {
      fontSize: 16,
    },
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '0',
    top: '0',
    containLabel: true,
  },
  legend: {
    orient: 'vertical',
    top: 'middle',
    left: 'right',
    itemGap: 4,
    itemWidth: 14,
    textStyle: {
      fontSize: 10,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      type: 'pie',
      left: '0',
      right: '50',
      radius: ['0', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1,
      },
      color: ['#f56c6c', '#409eff', '#dedede'],
      labelLine: {
        length2: 10,
        length: 15,
        smooth: true,
      },
      label: {
        show: false,
        fontSize: '12',
        fontWeight: 'bold',
        alignTo: 'labelLine',
      },
      emphasis: {},
      data: [],
    },
  ],
}

export {
  SZQK_OPTIONS,
  BAR_OPTIONS,
  PIE_OPTIONS,
  HZLY_DATA_OPTIONS,
  PFRC_DATA_OPTIONS,
  HORIZONTAL_BAR_OPTIONS,
  PROJECT_PIE_OPTIONS,
  PROJECT_HORIZONTAL_BAR_OPTIONS,
  PROJECT_BAR_OPTIONS,
  PROJECT_LINE_OPTIONS,
  SZRS_DATA_OPTIONS,
  QUALITY_CONTROL_OPTIONS,
  MISSING_NUMBER_OPTIONS,
  UPLOAD_COUNT_OPTIONS,
  DATA_HIATUS_OPTIONS,
  HOME_PIE_OPTIONS,
  PIE_SWL_OPTIONS,
  RCQK_OPTIONS,
  APACHE2_SCORE_OPTIONS,
  SBSYQK_DATA_OPTIONS,
  HXJ_DATA_OPTIONS,
  KSSB_DATA_OPTIONS,
  QXGRFBL_DATA_OPTIONS,
  ZC_DATA_OPTIONS,
  ZR_DATA_OPTIONS,
  BSQK_OPTIONS,
  DVT_DATA_OPTIONS,
  PIE_SLJK_OPTIONS,
  YBP_DATA_OPTIONS,
  ZB_DATA_OPTIONS,
  ZDFB_OPTIONS,
  EMG_DATA_OPTIONS,
  ZT_ZJ_DATA_OPTIONS,
}
