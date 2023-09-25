import type { MISS_OBJECT, MISS_TYPE } from '@/modules/base'

/**
 * 数据分组，可以自定义分组形势
 * @param arr 数据源
 * @param generateKey  分组的方式，可以是属性名，也可以是提取属性的方法
 * @returns 返回分组数据
 */
export default function groupBy(arr: Array<MISS_TYPE>, generateKey: string | Function) {
  const result: MISS_OBJECT = {}
  if (typeof generateKey === 'string') {
    const propName = generateKey
    generateKey = (item: MISS_OBJECT) => item[propName]
  }
  for (const item of arr) {
    const key = generateKey(item)
    // 还没有该key时就初始化为[]，然后再push进去
    if (!result[key]) {
      result[key] = []
    }
    // push新数据或者相同的放一起
    result[key].push(item)
  }
  return result
}
