<template>
  <layout-card>
    <div class="grid">
      <div class="flex-row">
        <div class="flex-column">
          <p class="text">Members</p>
          <p class="small-text">Description text goes here</p>
        </div>
        <tipe-button icon-before="plus">Add Member</tipe-button>
      </div>
      <tipe-table :members="members" />
    </div>
  </layout-card>
</template>

<script>
import { TipeTable } from '.'
import LayoutCard from '../LayoutCard'
import TipeButton from '../Button'

export default {
  name: 'MembersPanel',
  components: { LayoutCard, TipeTable, TipeButton },
  data() {
    return {
      members: [
        {
          dateJoined: '05/02/2018',
          id: '12',
          name: 'Ada Miller',
          email: 'ada_miller@gmail.com',
          status: 'Active',
          role: 'Owner',
          url: 'http://placekitten.com/200/300'
        },
        {
          dateJoined: '05/02/2018',
          id: '34',
          name: 'Ada Miller',
          email: 'ada_miller@gmail.com',
          status: 'Active',
          role: 'Owner',
          url: 'http://placekitten.com/200/300'
        },
        {
          dateJoined: '05/02/2018',
          id: '56',
          name: 'Ada Miller',
          email: 'ada_miller@gmail.com',
          status: 'Active',
          role: 'Owner',
          url: 'http://placekitten.com/200/300'
        },
        {
          dateJoined: '05/02/2018',
          id: '78',
          name: 'Ada Miller',
          email: 'ada_miller@gmail.com',
          status: 'Active',
          role: 'Owner',
          url: 'http://placekitten.com/200/300'
        },
        {
          dateJoined: '05/02/2018',
          id: '90',
          name: 'Ada Miller',
          email: 'ada_miller@gmail.com',
          status: 'Active',
          role: 'Owner',
          url: 'http://placekitten.com/200/300'
        }
      ]
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  grid-template-rows: 4rem auto;
  width: 100%;
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
