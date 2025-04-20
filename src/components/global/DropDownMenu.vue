<script setup lang="ts">
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons-vue'

defineProps<{
  title: string
  icon?: string
  items: string[]
}>()

const emit = defineEmits<{
  click: [item: string]
}>()

const handleClick = (item: string) => {
  emit('click', item)
}

const isHovered = ref(false)
</script>

<template>
  <a-dropdown>
    <div
      class="white flex-center menu"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <svg-icon :name="icon" class="r-5" />
      {{ title }}
      <component
        :is="isHovered ? CaretUpOutlined : CaretDownOutlined"
        class="l-5 p-2"
      />
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="item in items"
          :key="item.id"
          @click="handleClick(item)"
        >
          <div class="flex-center">{{ item.title }}</div>
          <div class="line t-10"></div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<style scoped>
.menu {
  padding-left: 10px;
  padding-right: 10px;
}

.r-5 {
  margin-right: 5px;
}

.l-5 {
  margin-left: 3px;
}

.t-10 {
  margin-top: 10px;
}

.p-2 {
  padding-top: 2px;
}
</style>
