<template>
  <div 
    :data-tipe-ui="$options.name" 
    class="card">
    <div class="content">
      <div>꠸</div>
      <p><slot /></p>
    </div>
    <div class="dots">⁞</div>
  </div>
</template>

<script>
export default {
  name: 'FolderCard'
}
</script>


<style lang='postcss' scoped>
.card {
  border: solid 1px #e9eff4;
  border-radius: 5px;
  background-color: #fff;
  height: 53px;
  width: 263px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: black;
  }

  & .content {
    display: flex;
    align-items: center;
    margin-left: 15px;

    & p {
      color: #323c47;
      font-size: 1.25rem;
      margin-left: 15px;
    }
  }

  & .dots {
    justify-self: end;
    margin-right: 15px;
  }
}
</style>
