<template>
  <div
    :data-tipe-ui="$options.name"
    class="wrapper">
    <div class="row">
      <label 
        :class="{[size]: true}" 
        class="switch">
        <input
          ref="switch"
          :id="label +'-switch'"
          :checked="value"
          :name="name"
          :disabled="isDisabled"
          :tabindex="tabindex"
          :class="{waiting}"
          type="checkbox"
          @change="onChange"
          @keyup.enter="$refs.switch.click()"
        >
        <span 
          :class="sizeClass" 
          class="slider round"/>
      </label>
      <label
        :for="label + '-switch'"
        :class="status" 
        class="label">{{ label }}</label>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import inputProps from '@/types/InputProps'

export default {
  name: 'TipeSwitch',
  props: {
    label: vueTypes.string.isRequired,
    ...inputProps
  },
  computed: {
    isDisabled() {
      if (this.waiting || this.disabled) return true
      return false
    }
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
    justify-content: flex-start;
  }
}

.label {
  color: var(--text-gray);
  font-size: 0.8125rem;
  margin: 0.625rem 0;

  &.error {
    color: var(--error);
  }
  &.success {
    color: var(--success);
  }
  &.warning {
    color: var(--warning);
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 26px;
  height: 14px;
  margin: 0 15px 0 5px;
  /* Hide default HTML checkbox */
  input {
    display: none;
  }

  &.large {
    width: 46px;
    height: 24px;
  }
  &.small {
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
  background-color: #b5baca;
  &.round {
    border-radius: 12px;
    &:before {
      border-radius: 50%;
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.large:before {
    height: 20px;
    width: 20px;
  }
  &.small:before {
  }
}

input:checked {
  & + .slider:before {
    left: 1px;
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  & + .slider.large:before {
    -webkit-transform: translateX(23px);
    -ms-transform: translateX(23px);
    transform: translateX(23px);
  }

  & + .slider.small:before {
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
  & + .slider.large {
    width: 46px !important;
  }
  & + .slider.small {
  }
}

input:disabled {
  & + .slider {
    cursor: not-allowed;
  }
}
input.waiting {
  & + .slider {
    cursor: wait;
  }
}

input:focus {
  & + .slider {
    box-shadow: 0 0.25rem 0.875rem 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
