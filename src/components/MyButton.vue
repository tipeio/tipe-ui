<template>
  <button
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'MyButton',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>


<style scoped>
:root {
  --mainColor: red;
}

button {
  border: 1px solid var(--mainColor);
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  margin: 10px;
}
</style>
