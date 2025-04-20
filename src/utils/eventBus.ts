import mitt from 'mitt'

type Events = {
  changeLanguage: string
}

const emitter = mitt<Events>()

export default emitter
