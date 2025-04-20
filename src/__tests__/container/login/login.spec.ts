import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, it, expect, beforeEach } from 'vitest'
import Login from '/src/views/login/Login.vue'
import { createI18n } from 'vue-i18n'

// 创建一个简单的 i18n 实例
const i18n = createI18n({
  locale: 'en', // 设置语言
  messages: {
    en: {
      login: 'Login',
      // 其他翻译...
    },
    // 可以添加其他语言...
  },
})

// 创建一个简单的路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 在这里定义您的路由
    { path: '/login', component: Login },
  ],
})

describe('Login.vue', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Login, {
      global: {
        plugins: [i18n, router],
      },
    })
  })

  it('shows error message when fields are empty', async () => {
    await wrapper.find('button').trigger('submit')
    expect(wrapper.vm.errorMessage).toBe('请输入用户名和密码') // 提示信息
    console.debug('some debug erro info')
  })

  it('shows error message when password is less than 6 digits', async () => {
    await wrapper.find('input[type="text"]').setValue('admin')
    await wrapper.find('input[type="password"]').setValue('12345')
    await wrapper.find('form').trigger('submit')
    expect(wrapper.vm.errorMessage).toBe('密码长度至少为6位') // 提示信息
  })
  // 新增的测试用例
  it('shows error message when username is empty', async () => {
    await wrapper.find('input[type="password"]').setValue('123456')
    await wrapper.find('button').trigger('submit')
    expect(wrapper.vm.errorMessage).toBe('请输入用户名') // 提示信息
  })

  it('shows error message when password is empty', async () => {
    await wrapper.find('input[type="text"]').setValue('admin')
    await wrapper.find('button').trigger('submit')
    expect(wrapper.vm.errorMessage).toBe('请输入密码') // 提示信息
  })
})
