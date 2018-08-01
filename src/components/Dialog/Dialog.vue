<template>
  <tipe-modal :data-tipe-ui="$options.name">
    <div class="body">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <div class="footer">
        <tipe-button
          color="info"
          @click="$emit('cancel')"
        >
          Cancel
        </tipe-button>
        <tipe-button
          color="danger"
          @click="$emit('continue')"
        >
          CONTINUE
        </tipe-button>
      </div>
    </div>
  </tipe-modal>
</template>

<script>
import vueTypes from 'vue-types'
import TipeModal from '@/components/Modal'
import TipeButton from '@/components/Button'

export default {
  name: 'TipeDialog',
  components: {
    TipeModal,
    TipeButton
  },
  props: {
    title: vueTypes.string.def(''),
    message: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
.body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  flex: 0 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--error);
  letter-spacing: 0.01375rem;
  box-sizing: border-box;
  padding: 1.3125rem 0;
  margin: 0;
}

p {
  flex: 1 1;
  align-content: center;
  font-size: 1rem;
  letter-spacing: 0.02125rem;
  color: var(--text-gray);
  box-sizing: border-box;
  padding-bottom: 3em;
  margin: 0;
}

.footer {
  flex: 0 0 5rem;
  border-top: 1px solid var(--gray-light);
  width: 100%;
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  box-sizing: border-box;
  padding: 0 6.25rem;
}
</style>
