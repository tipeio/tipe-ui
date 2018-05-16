import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TipeButton from '../src/components/Button.vue'

storiesOf('Button', module)
  .add('Fill/Default Button', () => ({
    components: { TipeButton },
    template: '<tipe-button @click="action">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Outline Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button type="outline" @click="action">Outline Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Small Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="small" @click="action">Small Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Medium Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="medium" @click="action">Medium Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Large Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="large" @click="action">Large Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Danger Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button btnStyle="danger" @click="action">Danger Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Dark Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button btnStyle="dark" dark @click="action">Dark Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Danger Outline Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button btnStyle="danger" type="outline" @click="action">Danger Outline</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Dark Outline Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button btnStyle="dark" type="outline" @click="action">Dark Outline</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('Small Outline Danger Button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button btnStyle="danger" size="small" type="outline" @click="action">Small Outline Danger</tipe-button>',
    methods: { action: action('clicked') }
  }))
