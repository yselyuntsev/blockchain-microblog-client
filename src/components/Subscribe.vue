<template>
  <button @click="$emit('click')" class="subscribe" :class="{ isSubscriber }">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    isSubscriber: { type: Boolean, default: false }
  },

  computed: {
    text() {
      return this.isSubscriber ? "Отписаться" : "Подписаться";
    }
  }
};
</script>

<style scoped>
.subscribe {
  outline: none;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: 320ms all cubic-bezier(0.165, 0.84, 0.44, 1);
  background: #63b3ed;
  color: #ffffff;
  font-size: 14px;
  padding: 6px 16px;
}

.subscribe.isSubscriber {
  background: #f33c3c;
}
</style>
