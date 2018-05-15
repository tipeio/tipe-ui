import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Btn from '../src/components/Button.vue'

storiesOf('btn', module)
  .add('Fill/Default Button', () => ({
    components: { Btn },
    template: '<btn @click="action">Fill Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Outline Button', () => ({
    components: { Btn },
    template: '<btn type="outline" @click="action">Outline Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Small Button', () => ({
    components: { Btn },
    template: '<btn size="small" @click="action">Small Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Medium Button', () => ({
    components: { Btn },
    template: '<btn size="medium" @click="action">Medium Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Large Button', () => ({
    components: { Btn },
    template: '<btn size="large" @click="action">Large Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Danger Button', () => ({
    components: { Btn },
    template: '<btn btnStyle="danger" @click="action">Danger Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Dark Button', () => ({
    components: { Btn },
    template: '<btn btnStyle="dark" dark @click="action">Dark Button</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Danger Outline Button', () => ({
    components: { Btn },
    template:
      '<btn btnStyle="danger" type="outline" @click="action">Danger Outline</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Dark Outline Button', () => ({
    components: { Btn },
    template:
      '<btn btnStyle="dark" type="outline" @click="action">Dark Outline</btn>',
    methods: { action: action('clicked') }
  }))
  .add('Small Outline Danger Button', () => ({
    components: { Btn },
    template:
      '<btn btnStyle="danger" size="small" type="outline" @click="action">Small Outline Danger</btn>',
    methods: { action: action('clicked') }
  }))
