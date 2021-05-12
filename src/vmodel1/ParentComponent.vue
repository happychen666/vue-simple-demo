<!-- parent -->
<template>
  <div class="parent">
    <p>我是父亲, 对儿子说： {{ sthGiveChild }}</p>
    <ChildComponent
      @returnBack="turnBack"
      :give="sthGiveChild"
    ></ChildComponent>
  </div>
</template>
<script>
import ChildComponent from "./ChildComponent.vue";
export default {
  data() {
    return {
      sthGiveChild: "给你100块",
    };
  },
  components: {
    ChildComponent,
  },
  methods: {
    turnBack(val) {
      this.sthGiveChild = val;
    },
  },
};
</script>