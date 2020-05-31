<template>
  <div class="auth">
    <Logo></Logo>

    <p class="title">Вход в учетную запись</p>

    <form class="form" @submit.prevent="handleSubmit">
      <Input v-model="username" placeholder="Логин" :required="true" />
      <Input
        v-model="password"
        size="small"
        placeholder="Пароль"
        type="password"
        :required="true"
      />

      <Button :disabled="disabled">Войти в учетную запись</Button>
    </form>

    <router-link class="link" to="/register">
      Нет учетной записи? Создайте новую!
    </router-link>

    <Servers></Servers>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },

  computed: {
    disabled() {
      return !(this.username.trim() && this.password.trim());
    }
  },

  created() {
    this.$store.dispatch("auth/logout");
  },

  methods: {
    handleSubmit() {
      const { username, password } = this;
      if (username && password) {
        this.$store.dispatch("auth/login", { username, password });
      }
    }
  }
};
</script>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.title {
  font-size: 24px;
  font-weight: 500;
  margin: 16px 0;
  color: var(--c-black);
}

.form {
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 400px;
  padding: 16px;
  margin: 16px 0;
}

.link {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-bottom: 8px;
  color: var(--c-gray);
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  color: var(--c-blue);
}
</style>
