<script setup lang="ts">
import { RightOutlined } from '@ant-design/icons-vue'

defineProps<{
  menus: API.LeftMenuItem[]
}>()

const emits = defineEmits<{
  (e: 'click', item: API.LeftMenuItem): void
}>()

const isCollapsed = ref(false)

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const handleItemClick = (item: API.LeftMenuItem) => {
  item.showChildren = !item.showChildren
  emits('click', item)
}

const handleChildItemClick = (item: API.LeftMenuItem) => {
  emits('click', item)
}
</script>

<template>
  <div class="sidebar" :class="{ collapsed: isCollapsed }">
    <div class="toggle-btn" @click="toggleSidebar">
      <span>{{ isCollapsed ? '>|' : '|<' }}</span>
    </div>

    <div class="menu-items">
      <div
        v-for="(item, index) in menus"
        :key="index"
        class="menu-item"
        @click="handleItemClick(item)"
      >
        <div v-if="isCollapsed" class="collapsed-item">
          <div class="icon-box" :class="{ danger: item.danger }">
            {{ item.icon }}
          </div>
        </div>
        <div v-else class="expanded-item">
          <div class="flex-center">
            <svg-icon :name="item.img" class="theme" />
            <div class="title" :class="{ danger: item.danger }">
              {{ item.title }}
            </div>
            <RightOutlined
              v-if="!item.children"
              style="font-size: 10px; color: #666"
            />
          </div>
          <div
            v-if="item.children && item.showChildren"
            class="children-item p-20"
          >
            <div
              v-for="child in item.children"
              :key="child.title"
              class="flex-center t-20"
              @click.stop="handleChildItemClick(child)"
            >
              <svg-icon :name="child.img" class="theme" />
              <div class="title" :class="{ danger: child.danger }">
                {{ child.title }}
              </div>
              <RightOutlined style="font-size: 10px; color: #666" />
            </div>
          </div>
          <!-- <div class="bed-numbers">
            <div
              v-for="number in item.bedNumbers"
              :key="number"
              class="bed-number"
              @click.stop="handleBedClick(number, item.title)"
            >
              {{ number }}
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100%;
  background: linear-gradient(90deg, #d0e3ff 0%, #eff4ff 100%);
  transition: width 0.3s ease;
  width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar.collapsed {
  width: 50px;
}

.toggle-btn {
  height: 40px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  /* background-color: #fff; */
  border-bottom: 1px solid #e8e8e8;
}

.menu-items {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.menu-item {
  margin-bottom: 8px;
  /* 设置光标形状为手指形状，提示用户这是一个可以点击的元素 */
  cursor: pointer;
}

.menu-item:hover {
  box-shadow: 2px 0 8px var(--global-color-blue-3);
}

.collapsed-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-box {
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.expanded-item {
  background-color: white;
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 14px;
  color: #333;
  margin-top: 4px;
  margin-left: 6px;
  flex: 1;
  /* margin-bottom: 8px; */
}

.bed-numbers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24px, 1fr));
  gap: 8px;
  color: var(--global-color-primary);
}

.bed-number {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 4px;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.bed-number:hover {
  background-color: #e6e6e6;
}

/* 滚动条样式 */
.menu-items::-webkit-scrollbar {
  width: 4px;
}

.menu-items::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.menu-items::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.menu-items::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.danger {
  color: #d03054;
}

.t-20 {
  margin-top: 20px;
}
.p-20 {
  padding-left: 20px;
}
</style>
