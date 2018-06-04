<template>
  <div class="select-flex">
    <label :htmlFor="textLabel">{{ textLabel }}</label>

    <div class="select">
      <select>
        <option 
          v-for="option in options" 
          :key="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeSelect',
  props: {
    textLabel: vueTypes.string.isRequired,
    options: vueTypes.array.isRequired
  },
  data() {
    return {
      textValue: ''
    }
  },
  methods: {
    onChange(event) {
      this.textValue = event.target.value
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
