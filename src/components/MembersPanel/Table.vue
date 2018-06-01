<template>
  <table class="table">
    <seperator />
    <tr class="table-heading">
      <th 
        class="start" 
        @click="sort('name')">NAME<span><icon 
          icon="arrow-up" 
          width="9px" 
          height="6px"/></span></th>
      <th @click="sort('role')">ROLE<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th @click="sort('date')">DATE JOINED<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th @click="sort('status')">STATUS<span><icon 
        icon="arrow-up" 
        width="9px" 
        height="6px"/></span></th>
      <th>ACTION</th>
    </tr>
    <seperator />
    <div class="scrollable">
      <table-row 
        v-for="(member, index) in members" 
        :key="member.id" 
        :member="member"
        :gray="index % 2 !== 0"
      />
    </div>
  </table>
</template>

<script>
import vueTypes from 'vue-types'
import { TableRow } from '.'
import Seperator from '../Seperator'
import Icon from '../Icon'

export default {
  name: 'TipeTable',
  components: { TableRow, Seperator, Icon },
  props: {
    members: vueTypes.array.isRequired
  },
  methods: {
    sort(type) {
      console.log('sorting', type)
    }
  }
}
</script>


<style lang='postcss' scoped>
.table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* hide scrollbar */
.scrollable {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
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
      display: flex;
      flex: 0 0 30%;
    }
  }
}
</style>
