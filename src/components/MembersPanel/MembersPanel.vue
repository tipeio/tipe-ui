<template>
  <tipe-card>
    <div class="grid">
      <div class="flex-row">
        <div class="flex-column">
          <p class="text">Members</p>
          <p class="small-text">Description text goes here</p>
        </div>
        <tipe-button
          icon-before="plus"
          size="small"
          color="primary"
          @click="modalToggle">Add Member</tipe-button>
      </div>
      <tipe-table :members="members" />
    </div>
  </tipe-card>
</template>

<script>
import vueTypes from 'vue-types'
import { TipeTable, AddMember } from '.'
import TipeCard from '@/components/Card'
import TipeButton from '../Button'

export default {
  name: 'MembersPanel',
  components: { TipeCard, TipeTable, TipeButton, AddMember },
  props: {
    members: vueTypes.array.isRequired
  },
  methods: {
    modalToggle() {
      this.$emit('toggle')
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
