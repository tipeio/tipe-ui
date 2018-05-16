<template>
  <div :data-tipe-ui="$options.name">
    <tipe-search class="search"/>
    <tipe-profile-image
      :url="profileImageUrl"
      class="menu"
    />
    <tipe-seperator class="seperator"/>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

import TipeSearch from '../components/Search'
import TipeProfileImage from '../components/ProfileImage'
import TipeSeperator from '../components/Seperator'

export default {
  name: 'TipeTopbar',
  components: {
    TipeSearch,
    TipeProfileImage,
    TipeSeperator
  },
  props: {
    profileImageUrl: vueTypes.string
  }
}
</script>

<style scoped>
[data-tipe-ui='TipeTopbar'] {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    'search menu'
    'seperator seperator';
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1px;
  align-items: center;
  padding: 0.4rem 1.4rem 0 1.4rem;
  box-sizing: border-box;
}

.search {
  grid-area: search;
}

.menu {
  grid-area: menu;
}

.seperator {
  margin-top: 1.4rem;
  grid-area: seperator;
}
</style>
