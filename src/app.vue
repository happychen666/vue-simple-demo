<!-- App.vue -->
<template>
  <div id="app">
    <template>
      <ParentComponent />
    </template>
  </div>
</template>
 
<script>
import ParentComponent from "./vmodel3/ParentComponent.vue";
export default {
  name: "App",
  components: {
    ParentComponent,
  },
};
</script>