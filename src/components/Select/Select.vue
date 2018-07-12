<template>
  <component
    :data-tipe-ui="$options.name"
    v-bind="$props"
    :is="is"/>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'

import TipeSelectUnderline from './SelectUnderline'
import TipeSelectButton from './SelectButton'

export default {
  name: 'TipeSelect',
  components: {
    TipeSelectUnderline,
    TipeSelectButton
  },
  props: {
    type: vueTypes.string,
    options: vueTypes.arrayOf(
      vueTypes.shape({
        label: vueTypes.string.def(''),
        value: vueTypes.string.def(' ')
      })
    ),
    placeholder: vueTypes.string,
    defaultSelected: vueTypes.shape({
      label: vueTypes.string.def(''),
      value: vueTypes.string.def(' ')
    }),
    color: vueTypes.oneOf([
      'default',
      'primary',
      'info',
      'none',
      'success',
      'danger',
      'warning'
    ]),
    ...interfaces.input
  },
  computed: {
    is() {
      if (this.type === 'button') return 'tipe-select-button'
      return 'tipe-select-underline'
    }
  },
  methods: {
    onChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>
