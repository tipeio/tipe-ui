<template>
  <table class="table">
    <tr class="table-heading">
      <seperator />
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
      <seperator />
    </tr>
    <div class="table-body">
      <tipe-scrollable>
        <table-row
          v-for="(member, index) in members"
          :key="member.id"
          :member="member"
          :gray="index % 2 !== 0"
        />
      </tipe-scrollable>
    </div>
  </table>
</template>

<script>
import vueTypes from 'vue-types'
import { TableRow } from '.'
import Seperator from '../Seperator'
import Icon from '../Icon'
import TipeScrollable from '@/components/Scrollable'

export default {
  name: 'TipeTable',
  components: {
    TipeScrollable,
    TableRow,
    Seperator,
    Icon
  },
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
  display: grid;
  grid-template-rows: 2.5rem 1fr;
}

.table-body {
  width: 100%;
  height: 100%;
}

.table-heading {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-top: 1px solid var(--gray-light);
  border-bottom: 1px solid var(--gray-light);

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
