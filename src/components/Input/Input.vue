<template>
  <div class="input-flex">
    <label :htmlFor="textLabel">{{ textLabel }}</label>
    <input 
      :type="inputType" 
      :id="textLabel" 
      :placeholder="textPlaceholder" 
      :value="textValue" 
      @change="onChange" >
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeInput',
  props: {
    textPlaceholder: vueTypes.string.isRequired,
    textLabel: vueTypes.string.isRequired,
    inputType: vueTypes.string.def('text')
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
.input-flex {
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
    color: #627098;
    font-size: 0.8125rem;
  }

  & input {
    border: none;
    border-bottom: #b5baca solid 1px;
    height: 2.5rem;
    color: #1f346c;
    font-size: 0.875rem;

    & ::placeholder {
      color: #b5baca;
      font-size: 0.875rem;
    }
  }
}
</style>
