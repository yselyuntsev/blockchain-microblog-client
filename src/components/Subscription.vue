<template>
  <router-link class="subscription" :to="`/user/${subscription.username}`">
    <p class="name">{{ subscription.name }}</p>
    <p class="username">@{{ subscription.username }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    subscription: { type: Object, required: true }
  }
};
</script>

<style scoped>
.subscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  position: relative;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--c-light);
  padding-bottom: 16px;
  text-decoration: none;
  margin-bottom: 16px;
}
.subscription:last-child {
  border-bottom: none;
}

.name {
  font-size: 14px;
  line-height: 16px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  color: var(--c-black);
}

.username {
  font-size: 12px;
  line-height: 14px;
  color: var(--c-gray);
  margin-top: 4px;
  font-weight: 500;
}
</style>
