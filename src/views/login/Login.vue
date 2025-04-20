<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { useBounceRef } from '@/composables/useBounceRef'

const router = useRouter()
const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const errorMessage = ref('')
const form = ref<HTMLFormElement | null>(null)

// 页面加载时检查是否有保存的登录信息
onMounted(() => {
  const savedUsername = localStorage.getItem('icu-username')
  const savedPassword = localStorage.getItem('icu-password')
  const savedRememberMe = localStorage.getItem('icu-remember-me')

  if (savedRememberMe === 'true') {
    username.value = savedUsername || ''
    password.value = savedPassword || ''
    rememberMe.value = true
  }

  // 添加全局键盘事件监听器
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  // 清理事件监听器
  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
})

const handleSubmit = (e: Event) => {
  e.preventDefault() // 阻止表单默认提交行为

  // 获取表单元素
  const formElement = form.value
  if (!formElement) return
  // 进行表单验证
  // if (!formElement?.reportValidity()) {
  // 如果表单验证失败，显示错误信息
  if (!username.value && !password.value) {
    errorMessage.value = '请输入用户名和密码'
    return
  } else if (!username.value) {
    errorMessage.value = '请输入用户名'
    return
  } else if (!password.value) {
    errorMessage.value = '请输入密码'
    return
  } else if (password.value.length < 6) {
    errorMessage.value = '密码长度至少为6位'
    return
  }
  // return
  // }

  // 重置错误信息
  // errorMessage.value = ''

  // 验证通过，继续登录流程
  if (rememberMe.value) {
    localStorage.setItem('icu-username', username.value)
    localStorage.setItem('icu-password', password.value)
    localStorage.setItem('icu-remember-me', 'true')
  } else {
    localStorage.removeItem('icu-username')
    localStorage.removeItem('icu-password')
    localStorage.removeItem('icu-remember-me')
  }

  if (router) {
    // localStorage.setItem('token', '1234567890')
    router.replace({ name: 'home' })
  } else {
    console.error('Router is undefined')
  }
}

// const bounceValue = useBounceRef<string>('', 1000)
// watch(bounceValue, (value: any) => {
//   console.log('value: ', value)
// })

// const getSession = async () => {
//   const session = await store.fetchSession()
//   console.log('session: ', session)
// }
// getSession()
const backCircles = ref([
  {
    top: '-30px',
    left: '100px',
    width: '340px',
    height: '340px',
    rotate: 'rotate(180deg)',
    time: '0',
    show: false,
  },
  // {
  //   top: '460px',
  //   left: '30px',
  //   width: '210px',
  //   height: '210px',
  //   rotate: 'rotate(60deg)',
  //   time: '300',
  //   show: false,
  // },
  {
    top: '65px',
    left: '400px',
    width: '900px',
    height: '900px',
    rotate: 'rotate(0)',
    time: '500',
    show: false,
  },
  {
    top: 'calc(100vh - 100px)',
    left: 'calc(100vw - 400px)',
    width: '200px',
    height: '200px',
    rotate: 'rotate(60deg)',
    time: '700',
    show: false,
  },
  {
    top: '-30px',
    left: 'calc(100vw - 200px)',
    width: '240px',
    height: '240px',
    rotate: 'rotate(90deg)',
    time: '0',
    show: false,
  },
])
</script>

<template>
  <div class="login-container">
    <div
      class="backgroundCircle"
      :style="{
        left: item.left,
        top: item.top,
        width: item.width,
        height: item.height,
        transform: item.rotate,
      }"
      v-for="(item, img) in backCircles"
      :key="img"
    >
      <img src="@/assets/images/02.png" style="width: 100%; height: 100%" />
    </div>
    <!-- <img src="@/assets/images/02.png" alt="login-bg" /> -->
    <div class="login-box">
      <div class="login-header">
        <i class="fas fa-hospital-alt"></i>
        <div class="flex-center font-30">
          e
          <div class="theme">P</div>
          IpelIne客户管理系统
        </div>
      </div>
      <form
        ref="form"
        class="login-form"
        @submit="handleSubmit"
        @keydown.enter="handleSubmit"
        novalidate
      >
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input
            type="text"
            v-model="username"
            placeholder="请输入用户名"
            autocomplete="username"
            required
            name="username"
          />
        </div>
        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            autocomplete="off"
            required
            name="password"
            minlength="6"
          />
        </div>
        <div class="remember-me">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            <span>记住密码</span>
          </label>
        </div>
        <div v-if="errorMessage" class="error">
          {{ errorMessage }}
        </div>
        <a-button type="primary" @click="handleSubmit">{{
          $t('login')
        }}</a-button>
        <!-- <button type="submit" class="login-button">登录系统</button> -->
      </form>
      <!-- <input type="text" v-model="bounceValue" /> -->
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 动态背景效果 */
  background: linear-gradient(120deg, #005df2 0%, #ae0fd3 100%);
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.backgroundCircle {
  position: fixed;
}

.login-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 400px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header i {
  font-size: 2.5rem;
  color: #0284c7;
  margin-bottom: 1rem;
}

.login-header h1 {
  color: #2d3748;
  font-size: 1.5rem;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input-group {
  position: relative;
}

.input-group i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
}

.input-group input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #2c5282;
  outline: none;
  box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.1);
}

.remember-me {
  display: flex;
  align-items: center;
  margin-top: -0.5rem;
}

.remember-me label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.remember-me input[type='checkbox'] {
  margin-right: 0.5rem;
  cursor: pointer;
}

.remember-me span {
  color: #4a5568;
  font-size: 0.9rem;
}

.login-button {
  background: linear-gradient(to right, #0284c7, #0369a1);
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover {
  background: linear-gradient(to right, #0369a1, #075985);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(2, 132, 199, 0.2);
}

.error {
  color: #e53e3e;
  font-size: 0.875rem;
  text-align: center;
  margin-top: -0.5rem;
}

/* 移除浏览器默认的验证气泡样式 */
input::-webkit-validation-bubble-message,
input::-webkit-validation-bubble {
  display: none;
}

/* 自定义验证消息样式 */
.input-group input:invalid {
  border-color: #e53e3e;
}

.input-group input:focus:invalid {
  border-color: #e53e3e;
  box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
}

/* 添加必填项标记样式 */
.input-group input:required {
  background-image: linear-gradient(
    45deg,
    transparent,
    transparent 50%,
    #e53e3e 50%,
    #e53e3e 100%
  );
  background-size: 8px 8px;
  background-position: top right;
  background-repeat: no-repeat;
}

/* 当输入有效时隐藏必填标记 */
.input-group input:valid {
  background-image: none;
}
</style>
@/services/auth/auth
