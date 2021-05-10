<!-- App.vue -->
<template>
  <div id="app">
    <div class="container">
      <ShowMessage />
      <UpdateMessage />
    </div>
  </div>
</template>
 
<script>
import ShowMessage from "./global-event-bus-component/ShowMessage.vue";
import UpdateMessage from "./global-event-bus-component/UpdateMessage.vue";
export default {
  name: "App",
  components: {
    ShowMessage,
    UpdateMessage,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>