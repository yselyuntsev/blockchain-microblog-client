<template>
  <div class="profile">
    <p class="name">{{ user.name }}</p>
    <p class="username">@{{ user.username }}</p>

    <Subscribe
      v-if="canSubscribe"
      @click="handleClick"
      :isSubscriber="isSubscriber"
    />
    <br />

    <div class="description">
      <p class="title">О себе</p>

      <p class="text" v-if="user.description">
        {{ user.description }}
      </p>
      <Empty v-else>Ничего нет 😥</Empty>
    </div>

    <div class="subscriptions">
      <p class="title">Подписки</p>

      <div v-if="subscriptions && subscriptions.length">
        <Subscription
          v-for="subscription in subscriptions"
          :key="subscription.id"
          :subscription="subscription"
        />
      </div>

      <Empty v-else>Подписок не найдено 😥</Empty>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    session() {
      return this.$store.state.auth.user;
    },
    user() {
      return this.$store.state.users.user;
    },
    subscriptions() {
      return this.$store.state.users.subscriptions.items;
    },
    canSubscribe() {
      return this.session.username !== this.user.username;
    },
    isSubscriber() {
      return this.session.subscriptions.includes(this.user.username);
    }
  },

  methods: {
    handleClick() {
      const type = this.isSubscriber ? "unsubscribe" : "subscribe";
      this.$store.dispatch("auth/setSubscription", {
        type,
        username: this.session.username,
        subscription: this.user.username
      });
    }
  }
};
</script>

<style scoped>
.subscriptions {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.title {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--c-black);
}

.description {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.text {
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.5;
  font-weight: 500;
  word-wrap: break-word;
  color: var(--c-gray);
}

.profile {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 40px;
}

.name {
  font-size: 24px;
  line-height: 32px;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
  color: var(--c-black);
}

.username {
  font-size: 14px;
  line-height: 16px;
  color: var(--c-gray);
  margin-top: 4px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
