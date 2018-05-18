import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import IconButton from '../src/components/IconButton'

import '../src/styles/globals.css'

storiesOf('Icon Button', module)
  .add('icon button', () => ({
    components: { IconButton },
    template: '<icon-button icon="folder" @click="action"/>',
    methods: { action: action('clicked') }
  }))
  .add('round icon button', () => ({
    components: { IconButton },
    template: '<icon-button round icon="sign-out" @click="action"/>',
    methods: { action: action('clicked') }
  }))
