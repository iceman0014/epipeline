<template>
  <div class="header-container">
    <div class="flex-center">
      <div class="white flex-center l-10 r-10">
        <div class="font-20">e<span class="theme">P</span>IpelIne</div>
        <div class="l-5">客户管理系统</div>
      </div>
      <!-- <IconLogo class="logo" @click="handleHomeClick" /> -->
      <!-- <template v-for="menu in menus" :key="menu.id">
        <DropDownMenu
          :title="menu.title"
          :icon="menu.icon"
          :items="menu.options"
          @click="handleClick"
        />
      </template> -->
      <div class="flex-center menu-item">
        <svg-icon name="department" />
        <div class="l-5 white">客户管理</div>
      </div>
    </div>
    <div class="flex-center">
      <div class="top-tools flex-center">
        <IconHome
          style="padding-left: 2px; padding-right: 2px"
          @click="handleHomeClick"
        />
      </div>
      <div class="top-tools flex-center" v-if="!fullScreen">
        <IconFullScene @click="launchFullscreen" />
      </div>
      <div class="top-tools flex-center" v-else>
        <IconExitFullScene @click="exitFullscreen" />
      </div>
      <div class="top-tools">
        <!-- <template v-for="menu in rightMenus" :key="menu.id"> -->
        <DropDownMenu
          :title="info.title"
          :items="info.options"
          :icon="info.icon"
          @click="handleRightMenuClick"
        />
        <!-- </template> -->
      </div>
      <div class="time">
        <Timer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFullScene from '@/components/svgs/IconFullScene.vue'
import IconExitFullScene from '@/components/svgs/IconExitFullScene.vue'
// import IconLogo from '@/components/svgs/IconLogo.vue'
import IconHome from '@/components/svgs/IconHome.vue'
import DropDownMenu from '@/components/global/DropDownMenu.vue'
import Timer from '@/components/global/Timer.vue'

defineProps<{
  menus: API.TopMenuItem[]
  info: API.TopMenuItem
}>()
const emit = defineEmits<{
  click: [item: API.TopMenuOption]
}>()
const handleClick = (item: string) => {
  console.log(item)
  emit('click', item)
}

const handleRightMenuClick = (item: string) => {
  console.log(item)
  emit('click', item)
}

const fullScreen = ref(false)

const launchFullscreen = () => {
  const element: any = document.documentElement
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
  fullScreen.value = true
}

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  }
  fullScreen.value = false
}

const handleHomeClick = () => {
  emit('click', { path: '/home' })
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  background: linear-gradient(90deg, #005df2 0%, #0041c2 70%, #ae0fd3 100%);
}
.logo {
  margin-left: 10px;
  margin-right: 20px;
}
.menu-btn {
  color: #fff;
}
.menu-item {
  height: 36px;
  padding-top: 4px;
  margin-left: 50px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid #fff;
  cursor: pointer;
}

.menu-item:hover {
  border-bottom: 1px solid #ff0;
}
.time {
  margin-left: 2px;
  margin-right: 6px;
}

.top-tools {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px 2px 2px 2px;
  opacity: 1;
  padding: 4px;
  cursor: pointer;
  margin-left: 6px;
}
.l-5 {
  margin-left: 5px;
}
.l-10 {
  margin-left: 10px;
}
.r-10 {
  margin-right: 10px;
}
</style>
