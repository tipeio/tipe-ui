<template>
  <div
    :data-tipe-ui="$options.name"
    class="card">
    <div class="file"><icon icon="file"/></div>
    <div class="label"><p><slot /></p></div>
    <div
      v-if="recent"
      class="dot"><icon icon="dot"/></div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import Icon from './Icon'

export default {
  name: 'DocCard',
  components: { Icon },
  props: {
    recent: vueTypes.bool.def(false)
  }
}
</script>


<style lang='postcss' scoped>
@define-mixin icon {
  display: flex;
  flex: 0 0 3rem;
  justify-content: center;
}
.card {
  border: solid 1px var(--gray-blue-light);
  border-radius: 5px;
  background-color: #fff;
  height: 53px;
  width: 178px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: var(--gray-blue-light);
  }

  & .file {
    @mixin icon;
  }

  & .dot {
    @mixin icon;
    align-self: flex-start;
    justify-content: flex-end;
    padding: 5px 5px 0 0;
  }

  & .label {
    display: flex;
    flex: 1 1 auto;
    color: #323c47;
    font-size: 0.8125rem;
  }
}
</style>
