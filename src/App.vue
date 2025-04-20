<template>
  <a-config-provider :locale="_locale" :autoInsertSpaceInButton="false">
    <art-provider>
      <router-view />
    </art-provider>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ArtProvider } from '@tdd/art-ui'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import { useI18n } from 'vue-i18n'
import { getConfig } from '@/helper/helper.config'

const checkUrlParameters = (url: string) => {
  //创建url对象
  const parseUrl = new URL(url)
  //检查是否包含参数resId和url
  const hasResId = parseUrl.searchParams.has('resId')
  const hasUrl = parseUrl.searchParams.has('url')
  //如果包含url参数进一步检查起内容
  let hasCas = false
  let hasIndex = false

  if (hasUrl) {
    const urlParams: string = parseUrl.searchParams.get('url') as string
    const urlObj = new URL(urlParams)
    hasCas = urlObj.searchParams.has('cas')
    hasIndex = urlObj.searchParams.has('index')
  }

  const result = hasResId && hasIndex && hasCas && hasUrl
  return {
    result,
  }
}

const url = window.location.href
const { result } = checkUrlParameters(url)

if (result) {
  getConfig().then(config => {
    window.location.href = config.features.redirect_url
  })
  // window.location.href =
  //   'https://10.100.137.103:30556/cas/login?service=http://app-root.ihd-rs7-dev.10.100.137.99.nip.io:31479/micro/app-iwb-ccis-nurse/'
}

const locales: any = {
  zh: { locale: zhCN, dayjsLocale: 'zh-cn' },
  en: { locale: enUS, dayjsLocale: 'en' },
}

const { locale } = useI18n()

const slocale = localStorage.getItem('locale') ?? 'zh'
console.log('localstorage slocale:', slocale)
const selectedLanguage: any = ref<'zh' | 'en'>(slocale)
const _locale = ref(locales[selectedLanguage.value].locale)
dayjs.locale(locales[selectedLanguage.value].dayjsLocale)
locale.value = slocale

function changeLocale(lang: string) {
  localStorage.setItem('locale', lang)
  selectedLanguage.value = lang as 'zh' | 'en'
  _locale.value = locales[selectedLanguage.value].locale
  dayjs.locale(locales[selectedLanguage.value].dayjsLocale)
  locale.value = lang
}

provide('changeLocale', changeLocale)
</script>

<style>
.background-color {
  background-color: #000;
}
</style>
