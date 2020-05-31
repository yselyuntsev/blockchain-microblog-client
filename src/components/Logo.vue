<template>
  <router-link class="logo" to="/">
    <img src="../assets/images/logo.svg" />
    <span>BlockPost</span>
  </router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo img {
  height: 32px;
  width: 32px;
}

.logo span {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-black);
}
</style>
