<!-- App.vue -->
<template>
  <div id="app">
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
      sampleData: ["Apple", "Banana", "Mango", "Strawberry"],
    };
  },
  methods: {
    sampleFunction(fruitName) {
      alert("You have selected: " + fruitName);
    },
  },
};
</script>