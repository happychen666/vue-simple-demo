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
};
</script>

<style>
ul,
ul li {
  list-style: none;
  margin-bottom: 5px;
}
</style>