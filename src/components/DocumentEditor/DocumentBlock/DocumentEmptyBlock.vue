<template>
  <div
    :data-tipe-ui="$options.name"
  >
    <div class="body">
      Please add a block.
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipeDocumentEmptyBlock'
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='TipeDocumentEmptyBlock'] {
  display: flex;
  flex-direction: column;
  border-radius: 0.1875rem;
  box-sizing: border-box;
  width: 100%;
  min-width: 20rem;
}

.margin {
  grid-area: margin;
}

.body {
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--midPurple);
}
</style>
