<!-- App.vue -->
<template>
  <div id="app">
    <p>{{ text }}</p>
    <template>
      <ChildComponent :onClick="sampleFunction" :fruits="sampleData" />
    </template>
  </div>
</template>
 
<script>
import ChildComponent from "./props-function/Child.vue";
export default {
  name: "App",
  components: {
    ChildComponent,
  },
  data() {
    return {
      text: 0,
      sampleData: ["Apple", "Banana", "Mango", "Strawberry"],
    };
  },
  methods: {
    sampleFunction(fruitName) {
      alert("You have selected: " + fruitName);
    },
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