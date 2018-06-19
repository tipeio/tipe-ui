<template>
  <tipe-drop-down
    :disabled="disabled"
    :waiting="waiting"
  >
    <tipe-select-block-control slot="control" />
    <tipe-select-block-panel
      slot="panel"
      :options="options"
    />
  </tipe-drop-down>
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import blockOptionShape from '@/types/BlockOption'
import TipeDropDown from '@/components/DropDown'
import TipeSelectBlockControl from './SelectBlockControl'
import TipeSelectBlockPanel from './SelectBlockPanel'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeSelectBlock',
  components: {
    TipeDropDown,
    TipeIcon,
    TipeSelectBlockControl,
    TipeSelectBlockPanel
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    ...inputProps
  }
}
</script>
