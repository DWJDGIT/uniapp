<template>
  <view class="content">
    <CustomNavBar />
    <Xtxswiper />
    <view class="prod-list">
      <view class="list-item" v-for="item in 8" :key="item">
        <text>{{ item }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from './component/index.vue'
import Xtxswiper from '@/components/Xtxswiper/index.vue'
</script>

<style lang="scss" scoped>
.prod-list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .list-item {
    height: 60px;
    flex: 0 0 24%;
    margin-right: 20px;
    margin-right: calc(4% / 3);
    margin-bottom: calc(4% / 3);
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #eee;
    &:nth-of-type(4n + 0) {
      margin-right: 0;
    }
  }
}
</style>
