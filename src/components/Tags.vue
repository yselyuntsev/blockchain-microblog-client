<template>
  <div class="tags">
    <p class="title">Последние теги</p>

    <div v-if="tags && tags.length">
      <router-link
        :to="`/tag/${tag}`"
        class="tag"
        active-class="active"
        v-for="tag in tags"
        :key="tag"
      >
        # {{ tag }}
      </router-link>
    </div>

    <Empty v-else>Еще не создано ни одного тега 😥</Empty>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      return this.$store.state.tags.tags;
    }
  }
};
</script>

<style scoped>
.tags {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.title {
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  color: var(--c-black);
}

.tag {
  display: block;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
  color: var(--c-black);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
.tag.active,
.tag:hover {
  color: var(--c-blue);
}
</style>
