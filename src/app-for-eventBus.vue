<!-- App.vue -->
<template>
  <div id="app">
    <div class="container">
      <div class="front">
        <div class="increment">
          <IncrementCount />
        </div>
        <div class="show-front">{{ fontCount }}</div>
        <div class="decrement">
          <DecreaseCount />
        </div>
      </div>

      <div class="back">
        <div class="increment">
          <IncrementCount />
        </div>
        <div class="show-back">{{ backCount }}</div>
        <div class="decrement">
          <DecreaseCount />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import IncrementCount from "./event-bus-component/IncrementCount.vue";
import DecreaseCount from "./event-bus-component/DecreaseCount.vue";
import { EventBus } from "./event-bus.js";
export default {
  name: "App",
  components: {
    IncrementCount,
    DecreaseCount,
  },
  data() {
    return {
      fontCount: 0,
      backCount: 0,
    };
  },
  mounted() {
    //使用 EventBus.$on(channel: string, callback(payload1,…))监听
    EventBus.$on("incremented", ({ num, deg }) => {
      this.fontCount += num;
      this.$nextTick(() => {
        this.backCount += num;
      });
    });
    EventBus.$on("decreased", ({ num, deg }) => {
      this.fontCount -= num;
      this.$nextTick(() => {
        this.backCount -= num;
      });
    });
  },
};
</script>