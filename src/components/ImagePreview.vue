<template>
  <div class="image">
    <img @click="open" class="image-thumb" :src="src" />

    <div class="preview" v-if="show">
      <div class="splash" @click="close"></div>
      <img class="image-full" :src="src" />
      <RoundedButton class="close" icon="close" @click="close" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String }
  },

  data() {
    return {
      show: false
    };
  },

  methods: {
    open() {
      this.show = true;
      document.body.style.overflow = "hidden";
    },

    close() {
      this.show = false;
      document.body.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  margin-top: 16px;
  display: block;
}

.image-thumb {
  width: auto;
  max-height: 160px;
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--c-light);
  cursor: pointer;
}

.preview {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.splash {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.64);
}

.image-full {
  max-height: 80vh;
  max-width: 80vw;
  width: auto;
  z-index: 50;
  border-radius: 4px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.16);
}

.close {
  z-index: 25;
  position: absolute;
  right: 64px;
  top: 64px;
}
</style>
