import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TipeButton from '@/components/Button'

import '@/styles/globals.css'

storiesOf('Button', module)
  .add('color: primary', () => ({
    components: { TipeButton },
    template: '<tipe-button color="primary">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('color: info', () => ({
    components: { TipeButton },
    template: '<tipe-button color="info">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('color: success', () => ({
    components: { TipeButton },
    template: '<tipe-button color="success">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('color: warning', () => ({
    components: { TipeButton },
    template: '<tipe-button color="warning">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('color: danger', () => ({
    components: { TipeButton },
    template: '<tipe-button color="danger">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('outline', () => ({
    components: { TipeButton },
    template: '<tipe-button outline>Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('disabled', () => ({
    components: { TipeButton },
    template: '<tipe-button :disabled="true">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('size: mini', () => ({
    components: { TipeButton },
    template: '<tipe-button size="mini">Mini Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('size: small', () => ({
    components: { TipeButton },
    template: '<tipe-button size="small">Small Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('size: medium', () => ({
    components: { TipeButton },
    template: '<tipe-button size="medium">Medium Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('size: large', () => ({
    components: { TipeButton },
    template: '<tipe-button size="large">Large Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon before label', () => ({
    components: { TipeButton },
    template: '<tipe-button iconBefore="plus">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon after label', () => ({
    components: { TipeButton },
    template: '<tipe-button iconAfter="plus">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon before and after label', () => ({
    components: { TipeButton },
    template:
      '<tipe-button iconBefore="plus" iconAfter="plus">Icon Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon only', () => ({
    components: { TipeButton },
    template: '<tipe-button color="primary" iconBefore="plus"></tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('icon only no backgound', () => ({
    components: { TipeButton },
    template: '<tipe-button color="none" iconBefore="plus"></tipe-button>',
    methods: { action: action('clicked') }
  }))
