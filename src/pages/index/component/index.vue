<template>
  <view class="custom-navbar" :style="{ paddingTop: `${safeAreaInsets.top}px` }">
    <view class="title">
      <text class="left">小兔鲜儿</text>
      <text class="right">新鲜 · 亲民 · 快捷</text>
    </view>
    <view class="search">
      <view class="search-wrapper">
        <view class="left-wrapper">
          <uni-icons class="search-icon" type="search" size="23" />
          搜索商品
        </view>
        <uni-icons type="scan" size="23" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
.custom-navbar {
  background: #27ba9b;
  padding: 10px;
  .title {
    margin-left: 5px;
    margin-bottom: 15px;
    color: #fff;
    .left {
      padding-right: 10px;
      font-size: 20px;
      letter-spacing: 3px;
    }
    .right {
      padding-left: 10px;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 4px;
        left: 0;
        bottom: 0;
        width: 1px;
        height: 15px;
        background-color: #f1ebeb;
      }
    }
  }

  .search {
    .search-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-radius: 20px;
      padding: 0 10px;
      font-size: 16px;
      background: #f7f3f3;
      opacity: 0.7;
      color: #979393;
      .left-wrapper {
        display: flex;
        align-items: center;
        line-height: 1;
        .search-icon {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
