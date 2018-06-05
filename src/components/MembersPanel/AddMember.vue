<template>
  <div class="grid">
    <div class="close"><icon icon="close"/></div>
    <div class="add-button"><tipe-button 
      color="purple" 
      size="full">ADD MEMBER</tipe-button></div>
    <div class="seperator"><seperator /></div>
    <div class="content">
      <p class="title">Add Member</p>
      <avatar-upload />
      <form>
        <tipe-input 
          text-label="Name" 
          input-type="text" 
          class="name"
          text-placeholder="Type your name here"/>
        <tipe-input 
          text-label="Email" 
          class="email"
          input-type="email" 
          text-placeholder="Type your email here"/>
        <tipe-select 
          :options="options" 
          class="role" 
          text-label="Role" />
      </form>
    </div>
  </div>
</template>

<script>
import { createManyMocks, user } from '../../mocks'
import Icon from '../Icon'
import TipeButton from '../Button'
import Seperator from '../Seperator'
import AvatarUpload from '../AvatarUpload'
import TipeInput from '../Input'
import TipeSelect from '../Select'

export default {
  name: 'AddMember',
  components: {
    Icon,
    TipeButton,
    Seperator,
    AvatarUpload,
    TipeInput,
    TipeSelect
  },
  data() {
    return {
      members: createManyMocks(user, 12),
      modalOpen: false,
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Member', value: 'member' },
        { label: 'Manager', value: 'manager' }
      ]
    }
  },
  methods: {
    modal() {
      this.modalOpen = !this.modalOpen
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  background-color: #fff;
  border-radius: 1rem;
  width: 550px;
  max-height: 100%;
  grid-template-columns: 3rem auto 3rem;
  grid-template-rows: 3rem auto 0 6rem;
  grid-template-areas:
    '. . close'
    '. content .'
    ' seperator seperator seperator'
    '. button .';
}

.close {
  background-color: var(--gray-light);
  grid-area: close;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 1rem 0 0;
}

.add-button {
  grid-area: button;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.content {
  grid-area: content;
  display: grid;
  width: 100%;
  align-content: start;
  grid-row-gap: 2rem;

  & .title {
    color: var(--darkPurple);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    justify-self: center;
  }

  & form {
    display: grid;
    grid-row-gap: 1.25rem;
    grid-template-rows: 1fr 1fr 1fr;
  }
}

.seperator {
  grid-area: seperator;
}
</style>
