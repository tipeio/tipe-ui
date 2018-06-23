<template>
  <div 
    :data-tipe-ui="$options.name" 
    :options="options" 
    class="select-flex"
    @keyup.up="keyup"
    @keyup.down="keydown"
    @keyup.enter="enter"
    v-on="isDisabled ? {} : { click: onClick }"
  >
    <select :disabled="isDisabled">
      <option 
        v-if="placeholder"
        :selected="true"
        disabled>{{ placeholder }}</option>
      <option 
        v-for="option in options"
        :value="option.value" 
        :selected="selectedValue.value === option.value"
        :key="option.value"
      >{{ option.label }}</option>
    </select>
    <tipe-button 
      :status="status" 
      :size="size" 
      icon-after="arrow-down">{{ selected }}</tipe-button>
    <tipe-select-dropdown 
      v-if="open" 
      :options="options" 
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
  components: { TipeButton, TipeSelectDropdown },
  props: {
    placeholder: vueTypes.string,
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
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
    selectStyle() {
      const { isDisabled, waiting, size, status, options } = this
      return {
        disabled: isDisabled,
        ...(status && { [status]: true }),
        ...(!options && { error: true }),
        waiting,
        [size]: true
      }
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

select {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
