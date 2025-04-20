import * as echarts from 'echarts/core'
import chinaJson from '@/assets/china.json'
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'
import type {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts/components'
import {
  BarChart,
  PieChart,
  LineChart,
  MapChart,
  BoxplotChart,
  ScatterChart,
  GaugeChart,
} from 'echarts/charts'
import type {
  BarSeriesOption,
  PieSeriesOption,
  LineSeriesOption,
  BoxplotSeriesOption,
  ScatterSeriesOption,
  GaugeSeriesOption,
} from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'

echarts.use([
  BarChart,
  PieChart,
  LineChart,
  BoxplotChart,
  ScatterChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  LegendComponent,
  VisualMapComponent,
  SVGRenderer,
  ToolboxComponent,
  MapChart,
  GaugeChart,
])
// @ts-ignore
echarts.registerMap('china', chinaJson)

// 按需构建option类型
export type CustomEchartsOption = echarts.ComposeOption<
  | GridComponentOption
  | BarSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | BoxplotSeriesOption
  | DatasetComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | VisualMapComponentOption
  | LineSeriesOption
  | GaugeSeriesOption
>
export default echarts
