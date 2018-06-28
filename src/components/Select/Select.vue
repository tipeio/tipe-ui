<template>
  <component 
    :data-tipe-ui="$options.name"  
    v-bind="$props" 
    :is="is"/>
</template>

<script>
import vueTypes from 'vue-types'
import SelectOptionShape from '@/types/SelectOptionShape'
import inputProps from '@/types/InputProps'

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
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
    placeholder: vueTypes.string,
    defaultSelected: vueTypes.shape(SelectOptionShape),
    color: vueTypes.oneOf([
      'default',
      'primary',
      'info',
      'none',
      'success',
      'danger',
      'warning'
    ]),
    ...inputProps
  },
  computed: {
    is() {
      if (this.type === 'button') return 'tipe-select-button'
      return 'tipe-select-underline'
    },
    methods: {
      onChange(val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>
