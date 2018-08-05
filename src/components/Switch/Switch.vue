<template>
  <div
    :data-tipe-ui="$options.name"
    :class="rootClassObject"
  >
    <div class="row">
      <label
        :class="sizeClass"
        class="switch"
      >
        <input
          ref="switch"
          :id="label +'-switch'"
          :checked="value"
          :name="name"
          :disabled="isDisabled"
          :tabindex="tabindex"
          :class="{waiting}"
          type="checkbox"
          @focus="$emit('focus', $event)"
          @blur="$emit('blur', $event)"
          @click="$emit('click', $event)"
          @change="$emit('change', $event)"
          @keyup.enter="$refs.switch.click()"
        >
        <span
          :class="sizeClass"
          class="slider round"
        />
      </label>
      <label
        v-if="label"
        :for="label + '-switch'"
        class="label"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import interfaces from '@tipe/tipe-interfaces'

export default {
  name: 'TipeSwitch',
  props: {
    label: vueTypes.string.def(''),
    ...interfaces.input
  },
  computed: {
    rootClassObject() {
      return {
        wrapper: true,
        [`status-${this.status}`]: this.status
      }
    },
    isDisabled() {
      if (this.waiting || this.disabled) return true
      return false
    },
    sizeClass() {
      return { [this.size]: true }
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

  &.status-error .slider {
    background-color: var(--error);
  }
  &.status-success .slider {
    background-color: var(--success);
  }
  &.status-warning .slider {
    background-color: var(--warning);
  }
}

.label {
  color: var(--text-gray);
  font-size: 0.8125rem;
  margin: 0.625rem 0;
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
  background-color: var(--purple);
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
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
    background-color: #b5baca;
    cursor: not-allowed;
  }
}
input.waiting {
  & + .slider {
    background-color: #b5baca;
    cursor: wait;
  }
}

input:focus {
  & + .slider {
    box-shadow: 0 0.25rem 0.875rem 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
