
<!-- IncrementCount.vue 
在 DecreaseCount 和 IncrementCount 分别发送出了 decreased 和 incremented频道-->
<template>
  <button @click="increment()">+</button>
</template>
 
<script>
import { EventBus } from "../event-bus.js";
export default {
  name: "IncrementCount",
  data() {
    return {
      num: 1,
      deg: 180,
    };
  },
  methods: {
    increment() {
      EventBus.$emit("incremented", {
        num: this.num,
        deg: this.deg,
      });
    },
  },
};
</script>