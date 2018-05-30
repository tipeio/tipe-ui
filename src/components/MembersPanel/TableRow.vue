<template>
  <tr>
    <div class="row">
      <div class="image"><tipe-profile-image :url="member.url" /></div>
      <div class="column">
        <p class="name">{{ member.name }}</p>
        <p class="small-text">{{ member.email }}</p>
      </div>
    </div>
    <div class="row">
      <p class="small-text">{{ member.role }}</p>
    </div>
    <div class="row">
      <p class="small-text">{{ member.dateJoined }}</p>
    </div>
    <div class="row">
      <p class="small-text">{{ member.status }}</p>
    </div>
    <div class="row">
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
    </div>
  </tr>
</template>

<script>
import vueTypes from 'vue-types'
import TipeProfileImage from '../ProfileImage'
import TipeButton from '../Button'

export default {
  name: 'TableRow',
  components: { TipeProfileImage, TipeButton },
  props: {
    member: vueTypes.object
  },
  methods: {
    deleteMember() {
      console.log('DELETE the member')
    },
    mail() {
      console.log('Email the member?')
    }
  }
}
</script>


<style lang='postcss' scoped>
tr {
  display: flex;
  width: 100vw;
  justify-content: space-evenly;

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
