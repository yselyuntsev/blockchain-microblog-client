<template>
  <button class="button" @click="$emit('click')" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false }
  }
};
</script>

<style lang="scss" scoped>
.button {
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

  & i {
    font-size: 14px;
    margin-right: 8px;
  }

  &:hover {
    background: lighten(#63b3ed, 2);
  }

  &:active {
    background: darken(#63b3ed, 2);
  }

  &:disabled {
    opacity: 0.32;
    cursor: not-allowed;
    background: #e2e8f0;
    color: #4a5568;

    &:hover,
    &:active {
      background: #e2e8f0;
    }
  }
}
</style>
