<template>
  <div class="grid"/>
</template>

<script>
import { TipeTable } from '.'
import { createManyMocks, user } from '../../mocks'
import LayoutCard from '../LayoutCard'
import TipeButton from '../Button'

export default {
  name: 'AddMember',
  components: { LayoutCard, TipeTable, TipeButton },
  data() {
    return {
      members: createManyMocks(user, 12),
      modalOpen: false
    }
  },
  methods: {
    modal() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
  height: 500px;
}
</style>
