<template>
  <div :data-tipe-ui="$options.name">
    <tipe-search class="search"/>
    <tipe-button
      outline
      size="small"
      color="purple-dark"
    >
      Documentation
    </tipe-button>
    <tipe-profile-image
      :url="profileImageUrl"
      class="profile-image"
    />
  </div>
</template>

<script>
import vueTypes from 'vue-types'

import TipeSearch from '@/components/Search'
import TipeProfileImage from '@/components/ProfileImage'
import TipeButton from '@/components/Button'

export default {
  name: 'TipeTopbar',
  components: {
    TipeSearch,
    TipeProfileImage,
    TipeButton
  },
  props: {
    profileImageUrl: vueTypes.string
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeTopbar'] {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr auto auto;
  grid-column-gap: 1.375rem;
  align-items: center;
  box-sizing: border-box;
}
</style>
