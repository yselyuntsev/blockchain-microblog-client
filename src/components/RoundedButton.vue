<template>
  <button class="button" type="button" @click="$emit('click')">
    <i class="material-icons">{{ icon }}</i>
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "" }
  }
};
</script>

<style scoped>
.button {
  outline: none;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: 320ms all cubic-bezier(0.165, 0.84, 0.44, 1);
  color: #a0aec0;
  background: #ffffff;
  width: 32px;
  height: 32px;
}
.button i {
  font-size: 18px;
}
.button:hover {
  background: #e2e8f0;
  color: #679bff;
}
.button:active {
  background: #ccd2db;
}
</style>
