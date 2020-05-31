<template>
  <section class="main">
    <slot></slot>
  </section>
</template>

<style scoped>
.main {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 80px);
  padding: 32px 16px;
  flex-direction: column;
  border-left: 1px solid var(--c-light);
  border-right: 1px solid var(--c-light);
}
</style>
