<template>
  <div class="padding">
    <tr 
      :class="{gray}" 
      class="member-row">
      <td class="row info">
        <div class="image"><tipe-profile-image :url="member.profileImageUrl" /></div>
        <div class="column">
          <p class="name-text">{{ member.firstName }} {{ member.lastName }}</p>
          <p class="small-text email">{{ member.email }}</p>
        </div>
      </td>
      <td class="row">
        <tipe-select 
          :default-selected="member.role"
          :options="[
            { label: 'Owner', value: 'owner' },
            { label: 'Member', value: 'member' },
            { label: 'Manager', value: 'manager' }
          ]" 
          :dropdown="true" 
          type="button"
          size="small"/>
      </td>
      <td class="row">
        <p class="small-text">{{ member.createdAt }}</p>
      </td>
      <td class="row">
        <p class="small-text">{{ member.status }}</p>
      </td>
      <td class="row">
        <tipe-button 
          size="small" 
          color="none" 
          icon-before="paper-airplane" 
          @click="send"/>
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
import TipeSelect from '../Select'

export default {
  name: 'TableRow',
  components: { TipeProfileImage, TipeButton, Seperator, TipeSelect },
  props: {
    member: vueTypes.object.isRequired,
    gray: vueTypes.bool.def(false)
  },
  methods: {
    deleteMember() {
      console.log('DELETE the member', this.member.id)
    },
    send() {
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
  background-color: #fff;
  width: 100%;
  justify-content: space-evenly;
  padding: 1rem 0;

  &.gray {
    background-color: #f7f8fb;
  }

  & .row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;

    &.info {
      display: flex;
      flex: 0 0 30%;
    }

    & .image {
      display: flex;
      flex: 0 0 4rem;
      justify-content: center;
    }

    & .column {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-left: 0.625rem;

      & .name-text {
        color: var(--darkPurple);
        font-size: 0.875rem;
        margin: 0;
      }
    }
  }

  & .small-text {
    color: var(--darkPurple);
    font-size: 0.75rem;
    margin: 0;
  }

  & .email {
    color: var(--midPurple);
  }
}
</style>
