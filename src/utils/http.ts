import type { MISS_OBJECT } from '@/modules/base'
import request, { type RequestDataConfig } from './request'

const token = uni.getStorageSync('token')

// 模拟axios的请求配置
request.setConfig({
  baseURL: 'http://localhost',
  timeout: 6000
})

request.interceptors.request((request: RequestDataConfig) => {
  if (token) {
    request.header['Authorization'] = `Bearer ${token}`
  }
  return request
})

request.interceptors.response((response: MISS_OBJECT) => {
  //   if (response.data.isOverTime) {
  //     uni.showModal({
  //       title: '提示',
  //       content: '您已超时,请重新登录!',
  //       showCancel: false,
  //       icon: 'success',
  //       success: function (e) {
  //         if (e.confirm) {
  //           uni.redirectTo({
  //             url: '/pages/login/login'
  //           })
  //         }
  //       }
  //     })
  //   } else {
  //     return response
  //   }
  /**
   * 抓错处理
   */
  return response
})

export default request
