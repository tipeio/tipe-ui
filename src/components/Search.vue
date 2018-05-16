<template>
  <input @click="onClick">
</template>

<script>
export default {
  name: 'TipeSearch',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  border: '1px solid #eee';
  border-radius: 3;
  background-color: '#FFFFFF';
  cursor: 'pointer';
  font-size: 15;
  padding: '3px 10px';
  margin: 10;
}
</style>
