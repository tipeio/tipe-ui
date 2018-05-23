<template>
  <div class="wrapper" >
    <label 
      :for="text + '-switch'" 
      class="label">{{ text }}</label>
    <label class="switch">
      <input 
        :id="text +'-switch'" 
        type="checkbox">
      <span class="slider round"/>
    </label>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'TipeSwitch',
  props: {
    text: vueTypes.string
  }
}
</script>

<style scoped lang="postcss">
/* The switch - the box around the slider */

.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  color: var(--text-gray);
  font-size: 0.8125rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 24px;
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
    border-radius: 24px;
    &:before {
      border-radius: 50%;
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 0px;
    bottom: -3px;
    background-color: white;
    border: 2px #d0d7dd solid;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked {
  & + .slider:before {
    left: 1px;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  & + .slider {
    background-image: var(--purple-gradient);
    left: 0;
    width: 56px !important;
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
