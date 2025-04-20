<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="not-found">
    <div class="content">
      <div class="stethoscope">🩺</div>
      <h1>404</h1>
      <p class="message">哎呀!这个页面好像走丢了...</p>
      <p class="sub-message">别担心,这种情况我们也会遇到</p>
      <div class="medical-icons">💊 💉 🏥 👨‍⚕️ 👩‍⚕️</div>
      <button class="back-home" @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f8ff;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content {
  text-align: center;
  padding: 40px;
}

.stethoscope {
  font-size: 80px;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}

h1 {
  font-size: 120px;
  margin: 0;
  background: linear-gradient(120deg, #1890ff, #52c41a);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.message {
  font-size: 28px;
  color: #2c3e50;
  margin: 20px 0 10px;
  font-weight: bold;
}

.sub-message {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.medical-icons {
  font-size: 32px;
  margin: 30px 0;
  animation: float 3s ease-in-out infinite;
}

.back-home {
  padding: 12px 30px;
  font-size: 18px;
  background: linear-gradient(120deg, #1890ff, #52c41a);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.back-home:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
