<template>
  <div class="content">
    <div 
      class="row" 
      @click="onClick">
      <p class="title" >{{ text.toUpperCase() }}</p>
      <tipe-icon
        :class="{open}"
        icon="arrow-down"
        class="icon"
      />
    </div>
    <slot v-if="open"/>
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
    text: vueTypes.string
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
  width: 199px;

  & .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.125rem;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 4px;

    & .icon {
      display: flex;
      flex: 0 0 2rem;
      transition: transform 250ms ease-in-out;

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
}
</style>
