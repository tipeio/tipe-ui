<template functional>
  <div
    class="waiting"
    data-tipe-ui="TipeImage"
  >
    loading...
  </div>
</template>

<style scoped>
[data-tipe-ui='TipeImage'] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  font-size: 0.8125rem;
  color: var(--text-gray);
}
</style>
