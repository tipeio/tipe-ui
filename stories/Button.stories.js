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
  .add('outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button outline @click="action">Outline Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('small button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="small" @click="action">Small Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('medium button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="medium" @click="action">Medium Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('large button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="large" @click="action">Large Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('danger button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="danger" @click="action">Danger Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('dark purple button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="dark-purple" dark @click="action">Dark Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('danger outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="danger" outline @click="action">Danger Outline</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('dark purple outline button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="dark-purple" outline @click="action">Dark Outline</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('small outline danger button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="danger" size="small" outline @click="action">Small Outline Danger</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('large outline grey button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="gray" size="large" outline @click="action">Large Outline Gray</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="purple" size="small" icon="plus" @click="action">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
