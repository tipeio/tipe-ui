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
  .add('default disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button :disabled="true" @click="action">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('primary button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="primary">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('primary disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" :disabled="true" color="primary">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('success button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="success">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('success disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="success" :disabled="true" >Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('info button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="info">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('info disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" :disabled="true" color="info">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('warning button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="warning">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('warning disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" :disabled="true" color="warning">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('danger button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" color="danger">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('danger disabled button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button @click="action" :disabled="true" color="danger">Fill Button</tipe-button>',
    methods: { action: action('clicked') }
  }))
  .add('mini button', () => ({
    components: { TipeButton },
    template:
      '<tipe-button size="mini" @click="action">Mini Button</tipe-button>',
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
  .add('icon only no backgound', () => ({
    components: { TipeButton },
    template:
      '<tipe-button color="none" size="medium" iconBefore="plus" @click="action"></tipe-button>',
    methods: { action: action('clicked') }
  }))
