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
      v-on="disabled ? {} : { click: onClick }">
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
      <div 
        :class="selectStyle"
        class="fake-select">{{ selectedValue.label || (placeholder || options ? options[0].label : 'Please provide select options') }}</div>
      <div 
        v-if="open" 
        class="dropdown">
        <div 
          v-for="(option, index) in options"
          :key="option.value"
          :class="{active: index === activeIndex}" 
          tabindex="-1"
          class="dropdown-item"
          @click="onChange(option)"><p>{{ option.label }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'
import SelectOptionShape from '@/types/SelectOptionShape'

export default {
  name: 'TipeSelect',
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
      if (this.waiting || this.disabled) return true
      return false
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
    }
  },
  methods: {
    onClick(event) {
      this.open = !this.open
    },
    onChange(val) {
      this.selectedValue = val
      this.$emit('change', val)
    },
    keyup() {
      if (!this.open) {
      } else if (this.activeIndex === 0)
        this.activeIndex = this.options.length - 1
      else this.activeIndex -= 1
    },
    keydown() {
      if (!this.open) {
      } else if (this.activeIndex === this.options.length - 1)
        this.activeIndex = 0
      else this.activeIndex += 1
    },
    enter() {
      if (!this.options) {
      } else if (!this.open) {
        this.open = true
      } else {
        this.onChange(this.options[this.activeIndex])
        this.open = false
        this.activeIndex = -1
      }
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

.dropdown {
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  z-index: 2;
  box-shadow: 5px 20px 40px 0 rgba(0, 0, 0, 0.1);
  padding: 0.6875rem 0;

  & .dropdown-item {
    height: 2.1875rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    & p {
      color: #627098;
      font-size: 0.8125rem;
      margin: 0;
      padding-left: 1.0625rem;
    }

    &:hover,
    &.active {
      background-color: #f7f8fb;
      border-left: 3px #1cc5bc solid;

      & p {
        padding-left: calc(1.0625rem - 3px);
      }
    }
  }
}
</style>
