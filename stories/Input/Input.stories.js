import { storiesOf } from '@storybook/vue'

import TipeInput from '../../src/components/Input'

const style = () => ({
  width: '200px'
})
storiesOf('Input', module)
  .add('default input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" /></div>'
  }))
  .add('small input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" size="small" /></div>'
  }))
  .add('large input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" size="large"/></div>'
  }))

  .add('success input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" value="olivia.oddo@gmail.com" status="success"/></div>'
  }))
  .add('error input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input label="Email" placeholder="Type your email here" type="email" value="olivia.odd" status="error" message="Please enter a valid email"/></div>'
  }))
  .add('error input large', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input size="large" label="Email" placeholder="Type your email here" type="email" value="olivia.odd" message="Please enter a valid email" status="error"/></div>'
  }))
  .add('warning input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input status="warning" message="Usernames are normally full names" label="Username" placeholder="Type your username here" type="text" value="oliv" /></div>'
  }))
  .add('disabled input', () => ({
    components: { TipeInput },
    computed: { style },
    template:
      '<div :style="style"><tipe-input :disabled="true"  label="Username" placeholder="Type your username here" type="text" /></div>'
  }))
