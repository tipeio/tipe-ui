<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="select-flex"
    @keyup.up="keyup"
    @keyup.down="keydown"
    @keyup.enter="enter"
    v-on="isDisabled ? {} : { click: onClick }"
  >
    <tipe-native-select 
      :options="options" 
      :disabled="isDisabled" 
      :placeholder="placeholder" 
      :selected-value="selectedValue"/>
    <tipe-button 
      :waiting="waiting"
      :color="color" 
      :status="status"
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
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import SelectOptionShape from '@/types/SelectOptionShape'
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
  props: {
    placeholder: vueTypes.string,
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
    color: vueTypes
      .oneOf(['default', 'primary', 'info', 'none'])
      .def('default'),
    ...inputProps
  },
  data() {
    return {
      open: false,
      selectedValue: {},
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
      let { open, activeIndex = this.activeIndex } = selectEnter(this)
      this.open = open
      this.activeIndex = activeIndex
    }
  }
}
</script>

<style scoped lang="postcss">
.select-flex {
  display: flex;
  flex-direction: column;
}
</style>
