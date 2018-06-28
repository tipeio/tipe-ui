<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="grid">
    <div 
      class="close" 
      @click="close"><tipe-icon icon="close"/></div>
    <div class="content">
      <p class="title">Add Member</p>
      <avatar-upload />
      <form @submit="onSubmit">
        <tipe-field 
          :label="fields.name.label" 
          :field="fields.name" 
          name="name" 
          class="name" 
          @change="onChangeName">
          <tipe-text-input />
        </tipe-field>
        <tipe-field 
          :label="fields.email.label" 
          :field="fields.email" 
          name="email" 
          class="email" 
          @change="onChangeEmail">
          <tipe-text-input />
        </tipe-field>
        <tipe-field 
          :field="{placeholder: 'Select a role', options}" 
          class="role" 
          label="Role" >
          <tipe-select @change="onChangeRole"/>
        </tipe-field>
        <div class="seperator"><tipe-seperator /></div>
        <div class="add-button">
          <tipe-button 
            :disabled="!canSubmit"
            type="submit"
            value="Submit" 
            color="primary"
            size="full">ADD MEMBER</tipe-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createManyMocks, user } from '../../mocks'
import TipeIcon from '../Icon'
import TipeButton from '../Button'
import TipeSeperator from '../Seperator'
import AvatarUpload from '../AvatarUpload'
import TipeTextInput from '../TextInput'
import TipeField from '../Field'
import TipeSelect from '../Select'

export default {
  name: 'AddMember',
  components: {
    TipeIcon,
    TipeButton,
    TipeSeperator,
    AvatarUpload,
    TipeTextInput,
    TipeSelect,
    TipeField
  },
  data() {
    return {
      members: createManyMocks(user, 12),
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Member', value: 'member' },
        { label: 'Manager', value: 'manager' }
      ],
      emailValue: '',
      emailMessage: '',
      emailStatus: '',
      roleValue: {},
      nameValue: '',
      nameStatus: '',
      nameMessage: '',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'What is your name?',
          value: ''
        },
        email: {
          label: 'Email',
          placeholder: 'What is your first email?',
          value: ''
        }
      }
    }
  },
  computed: {
    canSubmit() {
      return (
        this.emailStatus === 'success' &&
        this.nameStatus === 'success' &&
        !!this.roleValue.value
      )
    }
  },
  methods: {
    onChangeEmail(val) {
      this.emailValue = val
      this.emailValidate()
    },
    emailValidate() {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let valid = re.test(this.emailValue)
      this.emailStatus = valid === true ? 'success' : 'error'
      if (this.emailStatus === 'error') {
        this.emailMessage = 'Please enter a valid email'
      }
    },
    onChangeRole(val) {
      this.roleValue = val
      console.log('hello')
    },
    onChangeName(val) {
      this.nameValue = val
      this.nameValidate()
    },
    nameValidate() {
      let valid = this.nameValue.trim() !== ''
      this.nameStatus = valid === true ? 'success' : 'error'
      if (this.nameStatus === 'error') {
        this.nameMessage = 'Please enter a valid name'
      }
    },
    onSubmit(e) {
      e.preventDefault()
      console.log(
        `Name: ${this.nameValue}, Email: ${this.emailValue}, Role: ${
          this.roleValue.value
        }`
      )
      this.resetForm()
    },
    resetForm() {
      this.emailValue = ''
      this.roleValue = { label: 'Owner', value: 'owner' }
      this.nameValue = ''
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
