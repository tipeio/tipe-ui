<template>
  <table class="table">
    <seperator />
    <tr class="table-heading">
      <th class="start">NAME</th>
      <th>ROLE</th>
      <th>DATE JOINED</th>
      <th>STATUS</th>
      <th>ACTIONS</th>
    </tr>
    <seperator />
    <table-row 
      v-for="member in members" 
      :key="member.id" 
      :member="member"
    />
  </table>
</template>

<script>
import vueTypes from 'vue-types'
import { TableRow } from '.'
import Seperator from '../Seperator'

export default {
  name: 'Table',
  components: { TableRow, Seperator },
  props: {
    members: vueTypes.array
  }
}
</script>


<style lang='postcss' scoped>
.table {
  width: 100%;
  height: 100%;
}
.table-heading {
  display: flex;
  max-width: 100%;
  justify-content: space-evenly;
  height: 2.5rem;
  padding: 0 1rem;

  & th {
    color: #323c47;
    font-size: 0.75rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    &.start {
      justify-content: flex-start;
    }
  }
}
</style>
