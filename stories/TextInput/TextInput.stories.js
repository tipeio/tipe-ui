import { storiesOf } from '@storybook/vue'

import TipeTextInput from '../../src/components/TextInput'

const style = () => ({
  width: '200px'
})

const props = () => ({
  label: 'Name',
  placeholder: 'Type your name here',
  value: 'Olivia',
  status: 'success'
})
storiesOf('TextInput', module)
  .add('default input', () => ({
    components: { TipeTextInput },
    computed: { style, props },
    template:
      '<div :style="style"><tipe-text-input label="Name" placeholder="Type your name here" /></div>'
  }))
  .add('small input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input label="Name" placeholder="Type your name here"  size="small" /></div>'
  }))
  .add('large input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input label="Name" placeholder="Type your name here" size="large"/></div>'
  }))

  .add('success input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input label="Name" placeholder="Type your email here" value="olivia.oddo@gmail.com" status="success"/></div>'
  }))
  .add('error input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input label="Name" placeholder="Type your name here" value="olivia.odd" status="error"/></div>'
  }))
  .add('error input large', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input size="large" label="Name" placeholder="Type your name here" value="olivia" status="error"/></div>'
  }))
  .add('warning input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input status="warning" label="Username" placeholder="Type your username here"  value="oliv" /></div>'
  }))
  .add('disabled input', () => ({
    components: { TipeTextInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-text-input :disabled="true"  label="Username" placeholder="Type your username here"  /></div>'
  }))
