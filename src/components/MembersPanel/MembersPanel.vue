<template>
  <layout-card>
    <div class="grid">
      <div class="flex-row">
        <div class="flex-column">
          <p class="text">Members</p>
          <p class="small-text">Description text goes here</p>
        </div>
        <tipe-button
          icon-before="plus"
          @click="modalToggle">Add Member</tipe-button>
      </div>
      <tipe-table :members="members" />
    </div>
    <add-member @close="modalToggle" v-if="modalOpen" />
  </layout-card>
</template>

<script>
import vueTypes from 'vue-types'
import { TipeTable, AddMember } from '.'
import LayoutCard from '../LayoutCard'
import TipeButton from '../Button'

export default {
  name: 'MembersPanel',
  components: { LayoutCard, TipeTable, TipeButton, AddMember },
  props: {
    members: vueTypes.array.isRequired
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    modalToggle() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  grid-template-rows: 4rem 1fr;
  width: 100%;
  padding-bottom: 1rem;
  box-sizing: border-box;
}

.flex-row {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem;

  & .text {
    color: var(--darkPurple);
    font-size: 0.875rem;
    margin: 0;
    margin-bottom: 3px;
  }

  & .small-text {
    color: var(--midPurple);
    font-size: 0.75rem;
    margin: 0;
  }
}
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
