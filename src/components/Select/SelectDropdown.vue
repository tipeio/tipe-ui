<template>     
  <div 
    class="dropdown" :class="{[size]: true}">
    <div 
      v-for="(option, index) in options"
      :key="option.value"
      :class="{active: index === activeIndex}" 
      tabindex="-1"
      class="dropdown-item"
      @click="$emit('change', option)"><p>{{ option.label }}</p></div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import SelectOptionShape from '@/types/SelectOptionShape'

export default {
  name: 'TipeSelectDropdown',
  props: {
    options: vueTypes.arrayOf(vueTypes.shape(SelectOptionShape)),
    size: vueTypes
      .oneOf(['mini', 'small', 'medium', 'large', 'full'])
      .def('full'),
    activeIndex: vueTypes.number
  }
}
</script>

<style scoped lang="postcss">
.dropdown {
  background-color: #fff;
  border-radius: 0 0 5px 5px;
  z-index: 2;
  box-shadow: 5px 20px 40px 0 rgba(0, 0, 0, 0.1);
  padding: 0.6875rem 0;

  &.mini,
  &.small {
    width: 6.5625rem;
  }

  &.medium {
    width: 10rem;
  }

  &.large {
    width: 10.5625rem;
  }

  &.full {
    width: 100%;
  }

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
