// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MISS_TYPE = any

export interface MISS_OBJECT {
  [key: string]: MISS_TYPE
}

export interface ResponseDataSetting<T> {
  code: number
  msg: string
  data: T
}
