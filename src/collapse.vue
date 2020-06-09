<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'gulu-collapse',
  }
</script>
<style lang="scss" scoped>
  $grey:#ddd;
  .collapse{
    border:1px solid $grey;
    border-radius: 4px;
  }
</style>