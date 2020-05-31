<template>
  <p class="counter">
    <b :style="{ color }">{{ length }}</b> / {{ limit }}
  </p>
</template>

<script>
export default {
  props: {
    length: { type: Number, default: 0 },
    limit: { type: Number, default: 10 }
  },

  computed: {
    color() {
      return this.length > this.limit ? "#f33c3c" : "#679bff";
    }
  }
};
</script>

<style scoped>
.counter {
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: var(--c-gray);
}
</style>
