<template>
  <div class="editor">
    <form @submit.prevent="send">
      <Input v-model="data" placeholder="О чем хотите рассказать?" />
      <Input
        v-model="tags"
        size="small"
        placeholder="Перечислите теги через пробел"
      />

      <div class="meta">
        <div class="actions">
          <ImageUploader @load="loadImage" />
          <RoundedButton type="flat" icon="link" />
        </div>

        <Counter :limit="limit" :length="data.length" />
      </div>

      <ImagePreview v-if="image" :src="image" />
      <Button class="send" :disabled="disabled">Отправить</Button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
      tags: "",
      image: "",
      link: "",
      limit: 250
    };
  },

  computed: {
    length() {
      return this.data.length;
    },
    username() {
      return this.$store.state.auth.user.username;
    },
    disabled() {
      return this.data.length < 4 || this.data.length > this.limit;
    }
  },

  methods: {
    loadImage(image) {
      this.image = image;
    },

    send() {
      if (!this.data.trim() && this.data.length > this.limit) return;
      const { username, image, link } = this;
      const data = this.data.trim();

      const tags = [
        ...new Set(
          this.tags
            .trim()
            .split(" ")
            .filter(tag => tag.length)
            .map(tag => tag.replace("#").toLowerCase())
        )
      ];

      this.$store.dispatch("posts/createPost", {
        username,
        data,
        image,
        link,
        tags
      });
      this.$store.dispatch("tags/getTags");

      this.data = "";
      this.tags = "";
      this.link = "";
      this.image = "";
    }
  }
};
</script>

<style scoped>
.editor {
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 16px;
}
.editor:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: -16px;
  right: -16px;
  height: 1px;
  background: var(--c-light);
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.send {
  margin-top: 16px;
}

.actions {
  display: flex;
}
</style>
