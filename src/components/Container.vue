<template>
  <div class="container" :style="styles"><slot></slot></div>
</template>

<script>
export default {
  props: {
    direction: { type: String, default: "row" },
    justify: { type: String, default: "flex-start" },
    align: { type: String, default: "flex-start" }
  },

  computed: {
    styles() {
      const styles = [
        `flex-direction: ${this.direction}`,
        `align-items: ${this.align}`,
        `justify-content: ${this.justify}`
      ];
      return styles.join(";");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
