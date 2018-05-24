<template>
  <div class="card">
    <tipe-icon
      :icon="icon"
      class="icon"
      height="1.25rem"
      width="1.25rem"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'IconBadge',
  components: {
    TipeIcon
  },
  props: {
    icon: vueTypes.string.isRequired
  }
}
</script>

<style scoped lang="postcss">
.card {
  width: 3.4375rem;
  height: 3.4375rem;
  border-radius: 4px;
  background-color: var(--purple-transparent);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
