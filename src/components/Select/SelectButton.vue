<template>
  <div
    v-click-outside="clickOut"
    :data-tipe-ui="$options.name"
    class="select-flex"
    @keyup.up="keyup"
    @keyup.down="keydown"
    @keyup.enter="enter"
    v-on="isDisabled ? {} : { click: onClick }"
  >
    <div class="select">
      <tipe-native-select
        :options="options"
        :disabled="isDisabled"
        :placeholder="placeholder"
        :selected-value="selectedValue"/>
      <tipe-button
        :waiting="waiting"
        :color="color"
        :size="size"
        :disabled="isDisabled"
        icon-after="arrow-down">{{ selected }}</tipe-button>
      <tipe-select-dropdown
        v-if="open"
        :options="options"
        :size="size"
        :active-index="activeIndex"
        @change="onChange"/>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import ClickOutside from 'vue-click-outside'
import interfaces from '@/interfaces'
import TipeButton from '../Button'
import TipeSelectDropdown from './SelectDropdown'
import TipeNativeSelect from './NativeSelect'

import {
  selectKeyup,
  selectKeydown,
  selectEnter,
  selectClick,
  selectChange,
  findSelected,
  selectDisabled
} from './select-utils'

export default {
  name: 'TipeSelectButton',
  components: { TipeButton, TipeSelectDropdown, TipeNativeSelect },
  directives: {
    ClickOutside
  },
  props: {
    placeholder: vueTypes.string,
    options: vueTypes.arrayOf(
      vueTypes.shape({
        label: vueTypes.string.def(''),
        value: vueTypes.string.def('')
      })
    ),
    defaultSelected: vueTypes.shape({
      label: vueTypes.string.def(''),
      value: vueTypes.string.def('')
    }),
    color: vueTypes
      .oneOf(['primary', 'info', 'none', 'success', 'danger', 'warning'])
      .def('primary'),
    ...interfaces.input
  },
  data() {
    return {
      open: false,
      selectedValue: this.defaultSelected || {},
      activeIndex: -1
    }
  },
  computed: {
    isDisabled() {
      return selectDisabled(this)
    },
    selected() {
      return findSelected(this)
    }
  },
  methods: {
    onClick() {
      this.open = selectClick(this)
    },
    clickOut() {
      this.open = false
    },
    onChange(val) {
      this.selectedValue = selectChange(this, val)
    },
    keyup() {
      this.activeIndex = selectKeyup(this)
    },
    keydown() {
      this.activeIndex = selectKeydown(this)
    },
    enter() {
      let {
        open,
        activeIndex = this.activeIndex,
        selectedValue = {}
      } = selectEnter(this)
      this.open = open
      this.activeIndex = activeIndex
      this.onChange(selectedValue)
    }
  }
}
</script>

<style scoped lang="postcss">
.select-flex {
  display: flex;
  flex-direction: column;
}

.select {
  position: relative;
  vertical-align: top;
}
</style>
