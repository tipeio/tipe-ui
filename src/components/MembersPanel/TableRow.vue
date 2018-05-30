<template>
  <div class="padding">
    <tr class="member-row">
      <td class="row">
        <div class="image"><tipe-profile-image :url="member.url" /></div>
        <div class="column">
          <p class="name">{{ member.name }}</p>
          <p class="small-text">{{ member.email }}</p>
        </div>
      </td>
      <td class="row">
        <p class="small-text">{{ member.role }}</p>
      </td>
      <td class="row">
        <p class="small-text">{{ member.dateJoined }}</p>
      </td>
      <td class="row">
        <p class="small-text">{{ member.status }}</p>
      </td>
      <td class="row">
        <tipe-button 
          size="small" 
          color="none" 
          icon-before="paper-airplane" 
          @click="mail"/>
        <tipe-button 
          size="small" 
          color="none" 
          icon-before="trash" 
          @click="deleteMember"/>
      </td>
    </tr>
    <seperator />
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeProfileImage from '../ProfileImage'
import TipeButton from '../Button'
import Seperator from '../Seperator'

export default {
  name: 'TableRow',
  components: { TipeProfileImage, TipeButton, Seperator },
  props: {
    member: vueTypes.object
  },
  methods: {
    deleteMember() {
      console.log('DELETE the member', this.member.id)
    },
    mail() {
      console.log('Email the member?', this.member.id)
    }
  }
}
</script>


<style lang='postcss' scoped>
.padding {
  padding: 0 1rem;
}
.member-row {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 1rem 0;

  & .row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    & .image {
      flex: 0 0 4rem;
    }

    & .column {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;

      & .name {
        color: #323c47;
        font-size: 0.875rem;
        margin: 0;
      }
    }
  }

  & .small-text {
    color: #323c47;
    font-size: 0.75rem;
    margin: 0;
  }
}
</style>
