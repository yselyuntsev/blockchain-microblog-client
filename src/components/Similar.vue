<template>
  <div class="similar">
    <p class="value">
      Схожесть: <span :style="{ color }"> {{ value }}</span>
    </p>
    <a href="#" class="link">@{{ coincidence.id }}</a>
  </div>
</template>

<script>
export default {
  props: {
    coincidence: { type: Object, required: true }
  },

  computed: {
    value() {
      return `${(this.coincidence.value * 100).toFixed(2)}%`;
    },
    color() {
      const { value } = this.coincidence;

      if (value >= 0.75) return "#f33c3c";
      if (value >= 0.5) return "#f29100";
      if (value >= 0.25) return "#f2da00";

      return "#46dc79";
    }
  }
};
</script>

<style scoped>
.similar {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--c-light);
}
.similar:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.value {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-gray);
}
.value span {
  font-weight: 700;
}

.link {
  display: inline-block;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-gray);
  cursor: pointer;
  text-decoration: none;
}
.link:hover {
  color: var(--c-blue);
}
</style>
