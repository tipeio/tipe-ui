<template>
  <div class="grid">
    <div class="close"><icon icon="close"/></div>
    <div class="add-button"><tipe-button 
      color="purple" 
      size="full">ADD MEMBER</tipe-button></div>
    <div class="seperator"><seperator /></div>
    <div class="content">
      <p class="title">Add Member</p>
      <div class="add-avatar">
        <div class="outside">
          <div class="circle"/>
        </div>
        <p class="subtitle">Add avatar</p>
      </div>
    </div>
  </div>
</template>

<script>
import { createManyMocks, user } from '../../mocks'
import Icon from '../Icon'
import TipeButton from '../Button'
import Seperator from '../Seperator'

export default {
  name: 'AddMember',
  components: { Icon, TipeButton, Seperator },
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
  justify-content: center;
  width: 100%;
  align-content: start;
  grid-row-gap: 2rem;

  & .title {
    color: var(--darkPurple);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  & .add-avatar {
    display: grid;
    width: 100%;
    grid-row-gap: 1rem;
    justify-content: center;
    align-content: start;

    & .circle {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      background-color: var(--gray-blue-light);
    }

    & .outside {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      border: var(--text-gray-light) dashed 1px;
    }

    & .subtitle {
      font-size: 1rem;
      color: var(--text-gray-normal);
      margin: 0;
      text-align: center;
    }
  }
}

.seperator {
  grid-area: seperator;
}
</style>
