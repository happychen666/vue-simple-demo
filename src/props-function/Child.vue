<template>
  <div>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">
        <button type="button" @click="onClick(fruit)">{{ fruit }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    onClick: Function,
    fruits: Array,
  },
  beforeCreate() {
    console.log(this.$el, "beforeCreate");
  },
  created() {
    console.log(this.$el, "created");
  },
  beforeMount() {
    console.log(this.$el, "beforeMount");
  },
  mounted() {
    console.log(this.$el, "mounted");
    // 测试 beforeUpdate，updated会在数据更新时执行
    // setInterval(() => {
    //   this.text++;
    // }, 1000);
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
ul,
ul li {
  list-style: none;
  margin-bottom: 5px;
}
</style>