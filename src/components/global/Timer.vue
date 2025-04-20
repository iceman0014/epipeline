<template>
  <div class="time">
    {{ dateTime }}
  </div>
</template>
<script lang="ts" setup>
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import eventBus from '@/utils/eventBus'

// const props = defineProps({
//   language: {
//     type: String,
//     default: 'zh', // 默认语言为中文
//   },
// })

const dateTime = ref('')
const timer = ref(null)
const weekNames: Record<string, string[]> = {
  zh: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  en: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
}
const slocale = localStorage.getItem('locale') ?? 'zh'
const language = ref(slocale)
const weekName = computed(() => weekNames[language.value][dayjs().day()])
const dateFormat = computed(() =>
  language.value === 'zh' ? 'MM月DD日' : 'MM/DD',
)
const timeFormat = computed(() =>
  language.value === 'zh' ? 'HH时mm分ss秒' : 'HH:mm:ss',
)

const updateDateTime = () => {
  dayjs.locale(language.value === 'zh' ? 'zh-cn' : 'en')
  const date = dayjs().format(unref(dateFormat))
  const time = dayjs().format(unref(timeFormat))
  dateTime.value = `${date} ${unref(weekName)} ${time}`
}

onMounted(() => {
  updateDateTime()
  timer.value = setInterval(() => {
    updateDateTime()
  }, 1000)
})
onUnmounted(() => {
  if (timer.value) {
    clearInterval(unref(timer))
  }
})

eventBus.on('changeLanguage', (lang: string) => {
  console.log('timer: ', lang)
  language.value = lang
})
</script>

<style scoped>
.time {
  font-size: 14px;
  color: #fff;
}
</style>
