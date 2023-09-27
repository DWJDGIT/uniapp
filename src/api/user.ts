import type { MISS_OBJECT, ResponseDataSetting } from '@/modules/base'
import type { UserInfo } from '@/modules/user'
import request from '@/utils/http'

/**
 * 获取用户信息
 * @param data
 * @returns
 */
export const getUserInfo = (data: MISS_OBJECT): Promise<ResponseDataSetting<UserInfo>> => {
  return request.post('/', data)
}
