<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="select-flex" 
    @keyup.up="keyup"
    @keyup.down="keydown"
    @keyup.enter="enter">
    <label :for="label">{{ label }}</label>
    <div 
      :id="label" 
      :class="{[size]: true}"
      :tabindex="tabindex"
      class="select"
      v-on="isDisabled ? {} : { click: onClick }">
      <tipe-native-select 
        :options="options" 
        :disabled="isDisabled" 
        :placeholder="placeholder" 
        :selected-value="selectedValue"/>
      <div 
        :class="selectStyle"
        class="fake-select">{{ selected }}</div>
      <tipe-select-dropdown 
        v-if="open" 
        :options="options" 
        :active-index="activeIndex" 
        @change="onChange"/>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import SelectOptionShape from '@/types/SelectOptionShape'
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
  name: 'TipeSelect',
  components: { TipeSelectDropdown, TipeNativeSelect },
  props: {
    label: vueTypes.string.isRequired,
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

  & label {
    color: #627098;
    font-size: 0.8125rem;
    padding-left: 0.25em;
  }
}
.select {
  height: 3.5rem;
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;

  &.small {
    height: 2.5rem;
  }

  &.large {
    height: 4.5rem;
  }

  &:focus {
    & .fake-select {
      border-bottom: 2px solid #b5baca;
    }
  }

  & select {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  & .fake-select {
    -webkit-appearance: none;
    border: 1px solid transparent;
    border-radius: 0px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 3em;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.25em;
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #b5baca;
    color: #1f346c;
    cursor: pointer;
    font-size: 0.875rem;
    width: 100%;
    outline: 0;
    padding-right: 0.5em;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &.success {
      border-bottom: 1px solid var(--success);
    }
    &.error {
      border-bottom: 1px solid var(--error);
    }
    &.warning {
      border-bottom: 1px solid var(--warning);
    }

    &.small {
      height: 2rem;
    }

    &.large {
      height: 4em;
    }
  }

  & .disabled {
    cursor: not-allowed;
  }

  & .waiting {
    cursor: wait;
  }
}

.select::after {
  border: 2px solid transparent;
  border-radius: 1px;
  border-right: 0;
  border-top: 0;
  content: ' ';
  display: block;
  height: 5px;
  pointer-events: none;
  position: absolute;
  top: 50%;
  margin-top: -0.625em;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transform-origin: center;
  transform-origin: center;
  width: 5px;
  border-color: #627098;
  right: 0.5em;
  z-index: 4;
}
</style>
