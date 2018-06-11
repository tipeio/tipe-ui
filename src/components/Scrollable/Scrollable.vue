<template>
  <div
    :class="$style.window"
    data-tipe-ui="TipeScrollable"
  >
    <div :class="$style.scrollable">
      <slot/>
    </div>
  </div>
</template>

<style lang="postcss" module>
.window {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.scrollable {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}
</style>
