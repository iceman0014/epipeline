<script setup lang="ts">
import { useSvgIcons } from '@/composables/useSvgIcons'

const props = defineProps<{
  name: string
  color?: string
}>()

const { loadIcon } = useSvgIcons()
const currentIcon = computed(() => loadIcon(props.name))
</script>
<template>
  <component :is="currentIcon" />
</template>
