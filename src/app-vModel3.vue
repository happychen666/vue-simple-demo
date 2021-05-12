<!-- App.vue -->
<template>
  <div id="app">
    <template>
      <ParentComponent />
    </template>
  </div>
</template>
 
<script>
import ParentComponent from "./vmodel1/ParentComponent.vue";
export default {
  name: "App",
  components: {
    ParentComponent,
  },
};
</script>