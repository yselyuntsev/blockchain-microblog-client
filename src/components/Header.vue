<template>
  <div class="header-container">
    <header class="header">
      <Container justify="space-between" align="center">
        <Logo></Logo>

        <nav class="navbar">
          <NavLink to="/" icon="view_agenda">Лента</NavLink>
          <NavLink :to="userPage" icon="message">Мои записи</NavLink>
          <NavLink to="/all" icon="language">Все записи</NavLink>
        </nav>

        <NavLink to="/login" icon="exit_to_app">Выход</NavLink>
      </Container>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    userPage() {
      const username = this.$store.state.auth.user.username;
      return `/user/${username}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  display: block;
  height: 64px;
  width: 100%;
  position: relative;
  z-index: 100;
}

.header {
  height: 64px;
  width: 100%;
  position: fixed;
  background: var(--c-white);
  border-bottom: 1px solid var(--c-light);
  padding: 0 24px;
}

.navbar {
  justify-self: center;
  display: flex;

  & .link {
    margin: 0 24px;
  }
}
</style>
