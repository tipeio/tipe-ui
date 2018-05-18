<template>
  <button
    :data-tipe-ui="$options.name"
    :class="classObject"
    @click="onClick"
  >
    <icon 
      :icon="icon" 
      class="icon" />
  </button>
</template>

<script>
import vueTypes from 'vue-types'
import Icon from '../Icon.vue'

export default {
  name: 'IconButton',
  components: { Icon },
  props: {
    round: vueTypes.bool.def(false),
    icon: vueTypes.string.isRequired
  },
  computed: {
    classObject: function() {
      const { round } = this
      return {
        round
      }
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss" scoped>
button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &.round {
    width: 3.125rem;
    height: 3.125rem;
    background-color: #ffffff;
    border-radius: 3.125rem;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
