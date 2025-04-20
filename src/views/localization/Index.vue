<template>
  <art-localization :url="computeUrl" />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArtLocalization } from '@tdd/art-components'

const route = useRoute()

const computeUrl = computed(() => {
  return decodeURIComponent(route?.query?.url as string)
})
</script>
