import { ArtUniReport } from '@tdd/art-components'

export default {
  path: 'unireport',
  children: [
    {
      path: '',
      name: 'UniReportView',
      component: ArtUniReport,
    },
  ],
}
