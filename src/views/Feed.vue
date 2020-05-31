<template>
  <div class="feed">
    <Header></Header>

    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>

      <Main v-infinite-scroll="loadPosts">
        <Editor v-if="!$route.params.type"></Editor>

        <div class="posts" v-if="posts && posts.length">
          <Post v-for="(post, index) in posts" :key="index" :post="post"></Post>
        </div>

        <Empty v-else>Ни одного поста не найдено 😥</Empty>
      </Main>

      <Sidebar>
        <Tags></Tags>
        <Footer></Footer>
      </Sidebar>
    </Container>
  </div>
</template>

<script>
export default {
  computed: {
    type() {
      return this.$route.params.type;
    },
    username() {
      if (this.type === "user") return this.$route.params.params;
      return this.$store.state.auth.user.username;
    },
    params() {
      if (this.type === "tag") return this.$route.params.params;
      return this.username;
    },
    posts() {
      return this.$store.state.posts.posts.items;
    }
  },

  watch: {
    $route: "load"
  },

  async mounted() {
    await this.load();
  },

  methods: {
    async load() {
      await this.$store.dispatch("tags/getTags");
      await this.$store.dispatch("posts/clearPosts");

      await this.loadUser();
      await this.loadPosts();
    },

    loadUser() {
      const { username } = this;

      this.$store.dispatch("users/getUser", { username });
      this.$store.dispatch("users/getSubscriptions", { username });
    },

    loadPosts() {
      const type = this.$route.params.type || "feed";
      const { params } = this;

      this.$store.dispatch("posts/getPosts", { type, params });
    }
  }
};
</script>
