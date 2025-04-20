import { message, Modal, notification } from 'ant-design-vue'
import { setBaseUrl, setHeaders, setRequestConfig } from '@tdd/art-request'
import type { NoticeType } from 'ant-design-vue/es/message'

setHeaders({ APPNAME: import.meta.env.VITE_APP_NAME })
setBaseUrl('/api')

setRequestConfig({
  removeRefreshParam: true,
  exception: error => {
    const { response, message: httpMessage } = error

    if (response) {
      const { data } = response

      notification.error({
        message: data?.message || httpMessage,
      })
    }

    return error
  },
  failure: response => {
    const { type, message: content } = response

    if (type === 'fail') {
      Modal.error({
        title: '错误提示',
        class: 'excl-modal',
        content,
      })
    } else {
      const messageType = type as NoticeType

      message.open({ type: messageType, content })
    }

    return response
  },
})
