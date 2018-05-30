<template>
  <table class="table">
    <seperator />
    <tr class="table-heading">
      <th class="start">NAME<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th>ROLE<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th>DATE JOINED<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th>STATUS<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th>ACTION<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
    </tr>
    <seperator />
    <table-row 
      v-for="(member, index) in members" 
      :key="member.id" 
      :member="member"
      :gray="index % 2 !== 0"
    />
  </table>
</template>

<script>
import vueTypes from 'vue-types'
import { TableRow } from '.'
import Seperator from '../Seperator'
import Icon from '../Icon'

export default {
  name: 'Table',
  components: { TableRow, Seperator, Icon },
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
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    color: var(--darkPurple);
    font-size: 0.75rem;
    font-weight: bold;

    & span {
      display: flex;
      flex: 0 0 1rem;
      justify-content: flex-end;
    }

    &.start {
      justify-content: flex-start;
    }
  }
}
</style>
