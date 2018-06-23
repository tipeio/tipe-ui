<template>
  <div class="fake-select">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TipeSelectUnderline'
}
</script>

<style scoped lang="postcss">
.fake-select {
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 0px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 3em;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.25em;
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #b5baca;
  color: #1f346c;
  cursor: pointer;
  font-size: 0.875rem;
  width: 100%;
  outline: 0;
  padding-right: 0.5em;
  -moz-appearance: none;
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  &.success {
    border-bottom: 1px solid var(--success);
  }
  &.error {
    border-bottom: 1px solid var(--error);
  }
  &.warning {
    border-bottom: 1px solid var(--warning);
  }

  &.small {
    height: 2rem;
  }

  &.large {
    height: 4em;
  }
}
</style>
