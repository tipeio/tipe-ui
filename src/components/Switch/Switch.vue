<template>
  <div class="wrapper" >
    <div class="row">
      <label 
        :for="text + '-switch'" 
        class="label">{{ text }}</label>
      <label class="switch">
        <input 
          :id="text +'-switch'" 
          :checked="value"
          type="checkbox"
          @change="onChange"
        >
        <span class="slider round"/>
      </label>
    </div>
    <p 
      v-if="sublabel" 
      class="sublabel">{{ sublabel }}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeSwitch',
  props: {
    text: vueTypes.string.isRequired,
    sublabel: vueTypes.string,
    value: vueTypes.boolean,
    onCheck: vueTypes.func
  },
  methods: {
    onChange(event) {
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style scoped lang="postcss">
/* The switch - the box around the slider */

.wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  & .row {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
}

.label {
  color: var(--text-gray);
  font-size: 0.8125rem;
  margin: 0.625rem 0;
}

.sublabel {
  color: var(--text-gray-light);
  font-size: 0.615rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  width: 90%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 26px;
  height: 12px;
  margin: 0 5px;
  /* Hide default HTML checkbox */
  input {
    display: none;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background-color: rgba(152, 152, 152, 0.11);
  &.round {
    border-radius: 12px;
    &:before {
      border-radius: 50%;
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 0px;
    bottom: -1px;
    background-color: white;
    border: 1px #d0d7dd solid;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked {
  & + .slider:before {
    left: 1px;
    -webkit-transform: translateX(12px);
    -ms-transform: translateX(12px);
    transform: translateX(12px);
  }

  & + .slider {
    background-image: var(--purple-gradient);
    left: 0;
    width: 26px !important;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

input:focus + .slider {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
}
</style>
