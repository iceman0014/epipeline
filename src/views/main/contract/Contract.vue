<template>
  <div>
    <h1>合同管理</h1>
    <div class="loading-container">
      <div class="car-animation">🚗</div>
      <p>工程师在努力开发中.....</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// ... existing code ...
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh; /* 使提示居中 */
  font-size: 24px; /* 提示文字大小 */
}

.car-animation {
  font-size: 48px; /* 小车图标大小 */
  animation: moveCar 1s linear infinite; /* 动画效果 */
}

@keyframes moveCar {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(20px); /* 小车向右移动 */
  }
  100% {
    transform: translateX(0);
  }
}

/* 其他样式保持不变 */
</style>
