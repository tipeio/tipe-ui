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
        <simple-input 
          text-label="Name" 
          input-type="text" 
          text-placeholder="Type your name here"/>
        <simple-input 
          text-label="Email" 
          input-type="email" 
          text-placeholder="Type your email here"/>
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
import { SimpleInput } from '../Input'

export default {
  name: 'AddMember',
  components: { Icon, TipeButton, Seperator, AvatarUpload, SimpleInput },
  data() {
    return {
      members: createManyMocks(user, 12),
      modalOpen: false
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
  height: 600px;
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
  }
}

.seperator {
  grid-area: seperator;
}
</style>
