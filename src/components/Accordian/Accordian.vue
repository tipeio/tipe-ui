<template>
  <div 
    class="content" 
    @click="onClick">
    <div 
      class="row" 
    >
      <p class="title" >{{ text.toUpperCase() }}</p>
      <tipe-icon
        :class="{open}"
        icon="arrow-down"
        class="icon"
        width="9px"
        height="6px"
      />
    </div>
    <div 
      :class="{slotOpen: open}" 
      class="slot">
      <slot />
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '../Icon'

export default {
  name: 'Accordian',
  components: {
    TipeIcon
  },
  props: {
    text: vueTypes.string.isRequired
  },
  data: function() {
    return {
      open: false
    }
  },
  methods: {
    onClick() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="postcss">
.content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & .row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 2rem;
    width: 100%;
    border-bottom: 1px solid #eeeeee;

    & .icon {
      display: flex;
      flex: 0 0 2rem;
      transition: transform 300ms ease-in-out;

      &.open {
        transform: rotate(-180deg);
      }
    }
    & p {
      margin: 0;
      font-size: 0.6875rem;
      color: #dce0e5;
    }
  }

  & .slot {
    /* css animation */
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    width: 100%;

    /* add browser prefixes */
    transition: all 300ms ease-in-out;

    &.slotOpen {
      max-height: 500px;
      opacity: 1;
    }
  }
}
</style>
