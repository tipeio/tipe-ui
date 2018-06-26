import { storiesOf } from '@storybook/vue'
import faker from 'faker'
import TipeTextarea from '../../src/components/Textarea'

const wrapperStyleObject = {
  height: '25rem',
  width: '25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

storiesOf('Textarea', module)
  .add('default', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.paragraphs(3),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" />
      </div>`
  }))
  .add('placeholder', () => ({
    components: { TipeTextarea },
    data() {
      return {
        placeholder: faker.lorem.sentence(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :placeholder="placeholder" />
      </div>`
  }))
  .add('size: small', () => ({
    components: { TipeTextarea },
    data() {
      return {
        placeholder: faker.lorem.sentence(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :placeholder="placeholder" size="small" />
      </div>`
  }))
  .add('size: medium', () => ({
    components: { TipeTextarea },
    data() {
      return {
        placeholder: faker.lorem.sentence(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :placeholder="placeholder" size="medium" />
      </div>`
  }))
  .add('size: large', () => ({
    components: { TipeTextarea },
    data() {
      return {
        placeholder: faker.lorem.sentence(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :placeholder="placeholder" size="large" />
      </div>`
  }))
  .add('status: success', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.sentence(1),
        status: 'success',
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" :status="status"/>
      </div>`
  }))
  .add('status: warning', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.sentence(1),
        status: 'warning',
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" :status="status"/>
      </div>`
  }))
  .add('status: error', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.paragraphs(1),
        status: 'error',
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" :status="status"/>
      </div>`
  }))
  .add('waiting', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.paragraphs(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" waiting/>
      </div>`
  }))
  .add('disabled', () => ({
    components: { TipeTextarea },
    data() {
      return {
        value: faker.lorem.paragraphs(1),
        wrapperStyleObject
      }
    },
    template: `
      <div :style="wrapperStyleObject">
        <tipe-textarea :value="value" disabled/>
      </div>`
  }))
