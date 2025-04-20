<template>
  <div class="patient-card">
    <h3>
      {{ data?.patient?.name }}
      <IconCommunity />
    </h3>
    <p>ID: {{ data?.bedId }}</p>
    <p>床号：{{ data?.bedNumber }}</p>
    <p>科室：{{ data?.department }}</p>
    <p>姓名：{{ data?.patient?.name }}</p>
    <p>年龄: {{ data?.patient?.age }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'BedCardItem',
}
</script>

<script lang="ts" setup>
import type { BedCard } from '@/typings/api'
import IconCommunity from '@/components/svgs/IconCommunity.vue'

defineProps<{
  data: BedCard
}>()
</script>

<style>
.patient-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 180px;
  background-color: #fff;
  /* height: 180px; */
}
</style>
