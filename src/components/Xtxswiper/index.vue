<template>
  <div class="Xtxswiper">
    <uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
      <swiper :autoplay="true" :circular="true" class="swiper-box" @change="change">
        <swiper-item v-for="(item, index) in info" :key="index">
          <view class="swiper-item">
            {{ item.content }}
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </div>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
type ModeType = 'default' | 'round' | 'nav' | 'indexes'
const info = ref([
  {
    content: '内容 A'
  },
  {
    content: '内容 B'
  },
  {
    content: '内容 C'
  }
])
const current = ref(0)
const mode = ref<ModeType>('round')

const change: UniHelper.SwiperOnChange = (e) => {
  current.value = e.detail.current
}
// 页面加载
onLoad(() => {
  // do something
})
</script>

<style lang="scss" scoped>
.swiper-item {
  text-align: center;
}
</style>
