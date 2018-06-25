<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="select-flex"
    @keyup.up="keyup"
    @keyup.down="keydown"
    @keyup.enter="enter"
    v-on="isDisabled ? {} : { click: onClick }"
  >
    <div 
      :class="{[size]: true}" 
      class="select-button">
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
        :dropdown="true"
        icon-after="dropdown">{{ selected }}</tipe-button>
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

.select-button {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;

  &.mini {
    height: 1.625rem;
  }
  &.small {
    height: 1.875rem;
  }

  &.medium {
    height: 2.5rem;
  }

  &.large {
    height: 3.125rem;
  }

  &.full {
    height: 3.25rem;
  }
}
</style>
