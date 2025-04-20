<script setup lang="ts">
import { theme } from '@tdd/art-utils'
import useHome from '@/composables/useHome'
import { TopMenuBar } from '@/components/business/HomeComponents'
import { LeftSidebar } from '@/components/business/HomeComponents'
import { useRouter } from 'vue-router'
import { User } from '@tdd/art-api'
import { useSessionStore } from '@/stores'
import eventBus from '@/utils/eventBus'

theme.toTogglePrimaryColor('#0ff')

const { topMenus, leftMenus, topUserInfo } = useHome()
const router = useRouter()
const handleTopMenuClick = (item: API.TopMenuOption) => {
  console.log(item)
  if (item.id === 1005) {
    signOut()
  } else if (item.id === 1001) {
    const slocale = localStorage.getItem('locale') ?? 'zh'
    const lang = slocale === 'zh' ? 'en' : 'zh'
    console.log('lang: ', lang)
    changeLanguage(lang)
  } else {
    item.path && router.push(item.path)
  }
}

const changeLocale = inject('changeLocale') as (lang: 'en' | 'zh') => void
const changeLanguage = (lang: 'en' | 'zh') => {
  console.log('changeLanguage: ', lang)
  changeLocale(lang)
  eventBus.emit('changeLanguage', lang)
  // <h2>{{ $t('welcome') }}</h2>
  //     <h1>{{ $t('goodbye') }}</h1>
}

const signOut = async () => {
  const { isRs7 } = useSessionStore()
  if (isRs7) {
    await User.signout()
  } else {
    router.replace('/login')
  }
}

const handleLeftMenuClick = (item: API.LeftMenuItem) => {
  item?.path && router.push(item.path)
}

// 发送消息给父窗口，通知其用户已登出
// window.parent.postMessage({ action: 'MESSAGE_EVENT_LOGOUT' }, '*')
</script>
<template>
  <div class="home-page">
    <TopMenuBar
      :menus="topMenus"
      :info="topUserInfo"
      @click="handleTopMenuClick"
    />
    <div class="flex" style="height: 93%">
      <LeftSidebar :menus="leftMenus" @click="handleLeftMenuClick" />
      <router-view class="content" />
    </div>
  </div>
</template>
<style scoped>
.home-page {
  height: 100%;
  width: 100%;
}
.content {
  height: calc(100% - 30px);
  width: 100%;
}
</style>
