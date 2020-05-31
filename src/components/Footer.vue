<template>
  <footer class="footer">
    <div class="links">
      <p class="link">Условия</p>
      <p class="link">Конфеденциальность</p>
      <p class="link">Принцип работы и хранения данных</p>
    </div>
    <p class="copyright">© BlockPost, 2020.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
}

.links {
  display: flex;
  flex-wrap: wrap;
}

.link {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 16px;
  margin-bottom: 8px;
  color: var(--c-gray);
  cursor: pointer;
}
.link:hover {
  color: var(--c-blue);
}

.copyright {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-gray);
}
</style>
