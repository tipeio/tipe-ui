<template>
  <div class="grid">
    <div 
      class="close" 
      @click="close"><icon icon="close"/></div>
    <div class="content">
      <p class="title">Add Member</p>
      <avatar-upload />
      <form @submit="onSubmit">
        <tipe-input 
          :value="nameValue" 
          :validity="nameValidity" 
          text-label="Name"
          input-type="text"
          class="name"
          text-placeholder="Type your name here"
          @change="onChangeName"/>
        <tipe-input 
          :value="emailValue" 
          :validity="emailValidity"
          text-label="Email"
          class="email" 
          input-type="email"
          text-placeholder="Type your email here"
          @change="onChangeEmail"/>
        <tipe-select 
          :options="options" 
          :value="roleValue" 
          class="role"
          text-label="Role"
          @change="onChangeRole" />
        <div class="seperator"><seperator /></div>

        <div class="add-button">
          <tipe-button 
            :disabled="!canSubmit"
            type="submit"
            value="Submit" 
            color="purple"
            size="full">ADD MEMBER</tipe-button>
        </div>
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
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Member', value: 'member' },
        { label: 'Manager', value: 'manager' }
      ],
      emailValue: {
        value: '',
        changed: false
      },
      roleValue: 'member',
      nameValue: { value: '', changed: false }
    }
  },
  computed: {
    emailValidity() {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let valid = re.test(this.emailValue.value)
      let status = valid === true ? 'success' : 'error'
      let message =
        status === 'error' ? 'Please enter a valid email address' : ''
      return {
        valid,
        status,
        message
      }
    },
    nameValidity() {
      let valid = this.nameValue.value.trim() !== ''
      let status = valid === true ? 'success' : 'error'
      let message = status === 'error' ? 'Please enter a valid name' : ''
      return {
        valid: this.nameValue !== '',
        status,
        message
      }
    },
    canSubmit() {
      return (
        this.emailValidity.valid && this.nameValidity.valid && this.roleValue
      )
    }
  },
  methods: {
    onChangeEmail(val) {
      this.emailValue.value = val
      this.emailValue.changed = true
    },
    onChangeRole(val) {
      this.roleValue = val
    },
    onChangeName(val) {
      this.nameValue.value = val
      this.nameValue.changed = true
    },
    onSubmit(e) {
      e.preventDefault()
      console.log(
        `Name: ${this.nameValue.value}, Email: ${
          this.emailValue.value
        }, Role: ${this.roleValue}`
      )
      this.resetForm()
    },
    resetForm() {
      this.emailValue = {
        value: '',
        changed: false
      }
      this.roleValue = 'member'
      this.nameValue = { value: '', changed: false }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>


<style lang='postcss' scoped>
.grid {
  display: grid;
  background-color: #fff;
  border-radius: 0.5rem;
  width: 600px;
  max-height: 100%;
  grid-template-columns: 3rem auto 3rem;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    '. . close'
    'content content content';
  box-shadow: 5px 20px 40px 0 rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.close {
  background-color: var(--gray-light);
  grid-area: close;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0.5rem 0 0;
  cursor: pointer;
}

.add-button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  grid-area: button;
}

.seperator {
  grid-area: seperator;
}

.name {
  grid-area: nameInput;
}

.email {
  grid-area: emailInput;
}

.role {
  grid-area: roleInput;
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
    grid-template-rows: 1fr 1fr 1fr 0 0 6rem;
    grid-template-columns: 3rem auto 3rem;
    grid-template-areas:
      '. nameInput .'
      '. emailInput .'
      ' . roleInput .'
      ' . . .'
      'seperator seperator seperator'
      '. button .';
  }
}
</style>
