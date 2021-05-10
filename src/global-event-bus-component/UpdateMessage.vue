<!-- UpdateMessage.vue -->
<template>
  <div class="form">
    <div class="form-control">
      <input v-model="message" />
      <button @click="updateMessage()">更新消息</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "UpdateMessage",
  data() {
    return {
      message: "这是一条消息",
    };
  },
  methods: {
    updateMessage() {
      this.$bus.$emit("updateMessage", this.message);
    },
  },
  beforeDestroy() {
    $this.$bus.$off("updateMessage");
  },
};
</script>