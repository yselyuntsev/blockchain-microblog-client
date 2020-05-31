<template>
  <div class="auth">
    <Logo></Logo>

    <p class="title">Создайте учетную запись</p>

    <form class="form" @submit.prevent="handleSubmit">
      <Input
        v-model="username"
        placeholder="Имя пользователя"
        :required="true"
      />
      <Input
        v-model="password"
        size="small"
        placeholder="Пароль"
        type="password"
        :required="true"
      />
      <Input v-model="name" placeholder="Как вас зовут?" :required="true" />
      <Input
        v-model="description"
        size="small"
        placeholder="Немного о себе"
        :required="true"
      />

      <Button :disabled="disabled">Создать учетную запись</Button>
    </form>

    <router-link class="link" to="/login">
      Уже есть учетная запись? Авторизируйтесь!
    </router-link>

    <Servers></Servers>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      name: "",
      description: ""
    };
  },

  computed: {
    disabled() {
      return !(
        this.username.trim() &&
        this.password.trim() &&
        this.name.trim() &&
        this.description.trim()
      );
    }
  },

  created() {
    this.$store.dispatch("auth/logout");
  },

  methods: {
    handleSubmit() {
      const { username, password, name, description } = this;
      if (username && password && name && description) {
        this.$store.dispatch("auth/register", {
          username,
          password,
          name,
          description
        });
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

.form {
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 400px;
  padding: 16px;
  margin-top: 16px;
}

.title {
  font-size: 24px;
  font-weight: 500;
  margin: 16px 0;
  color: var(--c-black);
}

.link {
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 16px;
  margin-bottom: 8px;
  color: var(--c-gray);
  text-decoration: none;
  cursor: pointer;
}
.link:hover {
  color: var(--c-blue);
}
</style>
