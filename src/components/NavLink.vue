<template>
  <router-link exact :to="to" class="link" active-class="active">
    <i v-if="icon" class="material-icons icon">{{ icon }}</i>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: { type: String },
    icon: { type: String }
  }
};
</script>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: var(--c-gray);

  &:hover {
    color: var(--c-blue);
  }

  &.active {
    color: var(--c-blue);
  }

  .icon {
    font-size: 16px;
    margin-top: 1px;
    margin-right: 8px;
  }
}
</style>
