import type { MISS_TYPE, ResponseDataSetting } from '@/modules/base'
type DataType = string | AnyObject | ArrayBuffer | undefined
type MethodType =
  | 'GET'
  | 'OPTIONS'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'
  | undefined
/**
 * @description: 基础请求配置
 * @param { string } baseURL 根地址
 * @param { MISS_TYPE } header 请求头
 * @param { MethodType } method 请求方法
 * @param { string } dataType 数据类型
 * @param { number } timeout 请求超时，默认6秒
 * @param { MISS_TYPE } responseType 相应类型
 */
export interface RequestDataConfig {
  baseURL: string
  header?: MISS_TYPE
  method?: MethodType
  dataType?: string
  timeout?: number
  responseType?: MISS_TYPE
  [key: string]: MISS_TYPE
}

type ConfigType = RequestDataConfig & UniApp.RequestOptions

class Request {
  config = {
    baseURL: '',
    header: {
      'content-type': 'application/json',
      'source-client': 'miniapp'
    },
    method: 'GET',
    timeout: 60000,
    dataType: 'json',
    responseType: 'text'
  } as RequestDataConfig
  // 拦截器
  interceptors = {
    request: (func: MISS_TYPE) => {
      if (func) {
        Request.requestBefore = func
      } else {
        Request.requestBefore = (request: MISS_TYPE) => request
      }
    },
    response: (func: MISS_TYPE) => {
      if (func) {
        Request.requestAfter = func
      } else {
        Request.requestAfter = (request: MISS_TYPE) => request
      }
    }
  }
  static requestBefore(config: RequestDataConfig) {
    return config
  }
  static requestAfter(response: MISS_TYPE) {
    return response
  }
  static isCompleteURL(url: string) {
    return /(http|https):\/\/([\w.]+\/?)\S*/.test(url)
  }
  /**
   * 自定义config
   * @param func
   */
  setConfig(config: RequestDataConfig) {
    this.config = { ...this.config, ...config }
  }
  // 获取接口地址
  getConfig(): RequestDataConfig {
    return this.config
  }
  request<T>(options = {} as RequestDataConfig) {
    options.baseURL = options.baseURL || this.config.baseURL
    options.dataType = options.dataType || this.config.dataType
    options.url = Request.isCompleteURL(options.url) ? options.url : options.baseURL + options.url
    options.header = { ...this.config.header, ...options.header }
    options.method = options.method || this.config.method
    options = { ...Request.requestBefore(options), ...options }
    return new Promise<ResponseDataSetting<T>>((resolve, reject) => {
      options.success = function (res: UniApp.RequestSuccessCallbackResult) {
        resolve(Request.requestAfter(res) as ResponseDataSetting<T>)
      }
      options.fail = function (err: UniApp.GeneralCallbackResult) {
        reject(Request.requestAfter(err))
      }
      uni.request(options as ConfigType)
    })
  }
  get<K>(url: string, data: DataType, options = {} as RequestDataConfig) {
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options) as Promise<ResponseDataSetting<K>>
  }
  post<T extends DataType, K>(url: string, data: T, options = {} as ConfigType) {
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options) as Promise<ResponseDataSetting<K>>
  }
}

export default new Request()
