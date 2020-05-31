<template>
  <div class="post">
    <div class="meta">
      <router-link :to="`/user/${post.user.username}`" class="author">
        <p class="name">{{ post.user.name }}</p>
        <p class="username">@{{ post.user.username }}</p>
      </router-link>
      <span class="timestamp">{{ timestamp }}</span>
    </div>

    <div class="tags" v-if="post.tags && post.tags.length">
      <router-link
        :to="`/tag/${tag}`"
        class="tag"
        active-class="post__tag--active"
        v-for="tag in post.tags"
        :key="tag"
        replace
        ># {{ tag }}</router-link
      >
    </div>

    <div class="content" :style="{ borderColor }">
      <p class="text">{{ post.data }}</p>

      <Uniqueness :coincidences="coincidences"></Uniqueness>
    </div>

    <ImagePreview v-if="post.image" :src="post.image"></ImagePreview>
  </div>
</template>

<script>
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

export default {
  props: {
    post: { type: Object, required: true }
  },

  computed: {
    borderColor() {
      const value = +this.uniqueness;

      if (value <= 25) return "#F33C3C";
      if (value <= 50) return "#F29100";
      if (value <= 75) return "#F2DA00";

      return "#46DC79";
    },

    coincidences() {
      return this.post.coincidences || [];
    },

    timestamp() {
      const date = new Date(this.post.timestamp);
      const month = date.getMonth();

      return `${months[month]}, ${date.getDate()} ${date.toLocaleTimeString()}`;
    },

    uniqueness() {
      const size = this.coincidences.length || 1;
      const sum = this.coincidences.reduce((acc, c) => acc + c.value, 0) / size;

      return ((1 - sum) * 100).toFixed(2);
    }
  }
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;
  padding-bottom: 8px;
}
.post:hover:before {
  content: "";
  position: absolute;
  left: -16px;
  top: -8px;
  right: -16px;
  bottom: -8px;
  background: #f7fafc;
  border-top: 1px solid var(--c-light);
  border-bottom: 1px solid var(--c-light);
  z-index: -1;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.tag {
  display: inline-block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--c-gray);
  margin-right: 16px;
  cursor: pointer;
}
.tag.active,
.tag:hover {
  color: var(--c-blue);
}

.author {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.name {
  display: block;
  font-size: 16px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--c-black);
  font-weight: 500;
  white-space: nowrap;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 16px;
  margin-left: 16px;
  border-left: 2px solid var(--c-light);
}

.text {
  font-size: 14px;
  line-height: 1.5;
  color: var(--c-black);
  word-wrap: break-word;
}

.username {
  display: block;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: var(--c-gray);
}

.timestamp {
  color: var(--c-gray);
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}
</style>
