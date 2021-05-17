<!-- child -->
<template>
  <div class="child">
    <p>我是儿子，父亲对我说： {{ value }}</p>
    <div class="button" @click="returnBackFn">回应</div>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  methods: {
    returnBackFn() {
      // div没有input也 emit input
      this.$emit("input", "还你200块");
    },
  },
};
</script>
<style scoped>
.button {
  cursor: pointer;
}
</style>