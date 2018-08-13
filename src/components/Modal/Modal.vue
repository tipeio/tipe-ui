<template>
  <div
    :data-tipe-ui="$options.name"
    class="background">
    <div
      :style="containerStyle"
      class="container"
    >
      <div class="header">
        <button @click="$emit('close')">
          <tipe-icon
            class="close-icon"
            icon="cross"
          />
        </button>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeIcon from '@/components/Icon'

export default {
  name: 'TipeModal',
  components: {
    TipeIcon
  },
  props: {
    height: vueTypes.string.def('15rem'),
    width: vueTypes.string.def('15rem')
  },
  computed: {
    containerStyle: props => ({
      height: props.height,
      width: props.width
    })
  }
}
</script>

<style lang="postcss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 1.25rem 2.5rem 3.75rem 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.body {
  flex: 1 1;
}

button {
  height: 2.5rem;
  width: 2.5rem;
  outline: none;
  border: none;
  background-color: var(--gray-blue-light);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-icon {
  fill: var(--text-gray-dark);
}
</style>
