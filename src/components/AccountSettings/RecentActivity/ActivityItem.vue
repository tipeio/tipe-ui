<template>
  <div class="item">
    <div class="icon">
      <tipe-icon
        icon="dot"
      />
    </div>
    <div class="text">
      <p class="title">{{ item.title }}</p>
      <p class="time">{{ item.time }}</p>
    </div>

  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '../../Icon'

export default {
  name: 'ActivityItem',
  components: {
    TipeIcon
  },
  props: {
    item: vueTypes.object
  }
}
</script>

<style scoped lang="postcss">
.item {
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
  & .icon {
    display: flex;
    flex: 0 0 1.5rem;
    align-items: flex-start;
    padding: 4px 0 0 4px;
  }

  & .text {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;

    & .title {
      margin: 0;
      margin-bottom: 7px;
      font-size: 0.75rem;
      color: var(--text-gray);
    }

    & .time {
      margin: 0;
      font-size: 0.625rem;
      color: var(--text-gray-blue-light);
    }
  }
}
</style>
