<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="select-flex" 
  >
    <label :htmlFor="label">{{ label }}</label>

    <div 
      class="select" 
      @click="onClick">
      <select :disabled="disabled">
        <option 
          v-if="placeholder"
          :selected="true"
          hidden 
          disabled>{{ placeholder }}</option>
        <option 
          v-for="option in options"
          :value="option.value" 
          :selected="value === option.value"
          :key="option.value"
          hidden>{{ option.label }}</option>
      </select>
      <div 
        v-if="open" 
        class="dropdown">
        <div 
          v-for="option in options"
          :key="option.value" 
          class="dropdown-item"
          @click="onChange(option.value)"><p>{{ option.label }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import SelectOptionShape from '@/types/SelectOptionShape'

export default {
  name: 'TipeSelect',
  props: {
    label: vueTypes.string.isRequired,
    placeholder: vueTypes.string,
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
    value: vueTypes.string.isRequired,
    disabled: vueTypes.bool.def(false)
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    },
    onChange(val) {
      this.$emit('change', val)
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

  & select {
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 0px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 3em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.25em;
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    color: #1f346c;
    cursor: pointer;
    display: block;
    font-size: 0.875rem;
    width: 100%;
    outline: 0;
    padding-right: 3.5em;
    -moz-appearance: none;
    appearance: none;
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
    align-items: center;

    & p {
      color: #627098;
      font-size: 0.8125rem;
      margin: 0;
      padding-left: 1.0625rem;
    }

    &:hover {
      background-color: #f7f8fb;
      border-left: 3px #1cc5bc solid;

      & p {
        padding-left: calc(1.0625rem - 3px);
      }
    }
  }
}
</style>
