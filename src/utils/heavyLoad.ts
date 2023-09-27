import type { MISS_TYPE } from '@/modules/base'

export default function createOverLoad() {
  const callMap = new Map()
  function overload(this: MISS_TYPE, ...args: MISS_TYPE) {
    const key = args.map((arg: MISS_TYPE) => typeof arg).join(',')
    const fn = callMap.get(key)
    if (fn) {
      return fn.apply(this, args)
    }
    throw new Error('no matching function')
  }
  overload.addImpl = function (...args: MISS_TYPE) {
    const fn = args.pop()
    if (typeof fn !== 'function') {
      return
    }
    const types = args
    callMap.set(types.join(','), fn)
  }
  return overload
}
