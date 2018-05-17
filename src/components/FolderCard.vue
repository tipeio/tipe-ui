<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="card">
    <div class="folder"><icon icon="folder"/></div>
    <div class="label"><p><slot /></p></div>
    <div class="dots"><icon icon="dots"/></div>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'FolderCard',
  components: {
    Icon
  }
}
</script>


<style lang='postcss' scoped>
@define-mixin icons $color {
  display: flex;
  flex: 0 0 3rem;
  justify-content: center;
}

.card {
  border: solid 1px var(--gray-blue-light);
  border-radius: 5px;
  background-color: #fff;
  height: 3.3125rem;
  width: 263px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    background-color: var(--gray-blue-light);
  }

  & .dots {
    @mixin icons;
  }

  & .folder {
    @mixin icons;
  }

  & .label {
    display: flex;
    flex: 1 1 auto;
    color: #323c47;
    font-size: 0.8125rem;
  }
}
</style>
