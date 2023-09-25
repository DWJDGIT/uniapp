import { defineStore } from 'pinia'
import { ref } from 'vue'

const useMemberStore = defineStore(
  'member',
  () => {
    const profile = ref()

    const setProfile = (val: MISS_TYPE) => {
      profile.value = val
    }

    const clearProfile = () => {
      profile.value = undefined
    }

    return {
      profile,
      setProfile,
      clearProfile
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        }
      }
    }
  }
)
export default useMemberStore
