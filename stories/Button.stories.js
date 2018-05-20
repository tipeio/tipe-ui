import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TipeButton from '../src/components/Button'

import '../src/styles/globals.css'

storiesOf('Button', module)
  .add('default button', () => ({
    components: { TipeButton },
    template: '<tipe-button @click="action">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('large button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="large" @click="action">Large Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button outline @click="action">Outline Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('large outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button outline  size="large" @click="action">Outline Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('gray outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button outline color="gray" @click="action">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon before label', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="purple" size="medium" iconBefore="plus" @click="action">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon after label', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="purple" size="medium" iconAfter="plus" @click="action">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon before and after label', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="purple" size="medium" iconBefore="plus" iconAfter="plus" @click="action">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon only', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="purple" size="medium" iconBefore="plus" @click="action"></tipe-button>',
    methods: { action: action('clicked') }
  }))
