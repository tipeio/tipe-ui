<template>
  <tipe-drop-down
    :disabled="disabled"
    :waiting="waiting"
  >
    <tipe-select-block-control slot="control" />
    <tipe-select-block-panel
      slot="panel"
      :options="options"
      @change="value => $emit('change', value)"
    />
  </tipe-drop-down>
</template>

<script>
import vueTypes from 'vue-types'
import blockOptionShape from '@/types/BlockOption'
import TipeDropDown from '@/components/DropDown'
import TipeSelectBlockControl from './SelectBlockControl'
import TipeSelectBlockPanel from './SelectBlockPanel'

export default {
  name: 'TipeSelectBlock',
  components: {
    TipeDropDown,
    TipeSelectBlockControl,
    TipeSelectBlockPanel
  },
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(blockOptionShape)),
    waiting: vueTypes.bool.def(false),
    disabled: vueTypes.bool.def(false)
  }
}
</script>
