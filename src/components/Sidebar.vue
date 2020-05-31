<template>
  <div class="sidebar-container">
    <aside class="sidebar">
      <slot></slot>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  display: block;
  min-width: 280px;
  max-width: 280px;
  position: relative;
}
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  background: var(--c-white);
  min-width: 280px;
  max-width: 280px;
  padding: 24px;
}
</style>
