<template>
  <div class="uniqueness">
    <div class="meta">
      <p class="value">
        Уникальность: <span :style="{ color }">{{ value }}</span>
      </p>

      <RoundedButton :icon="icon" v-if="coincidences.length" @click="toggle" />
    </div>

    <div class="similar" v-if="show">
      <Similar
        v-for="(coincidence, index) in coincidences"
        :key="index"
        :coincidence="coincidence"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coincidences: { type: Array, required: true }
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    size() {
      return this.coincidences.length || 1;
    },
    icon() {
      return this.show ? "expand_less" : "expand_more";
    },
    color() {
      const value = this.uniqueness;

      if (value <= 0.25) return "#f33c3c";
      if (value <= 0.5) return "#f29100";
      if (value <= 0.75) return "#f2da00";

      return "#46dc79";
    },
    uniqueness() {
      const sum =
        this.coincidences.reduce((acc, t) => acc + t.value, 0) / this.size;

      return 1 - sum;
    },
    value() {
      return `${(this.uniqueness * 100).toFixed(2)}%`;
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss" scoped>
.uniqueness {
  margin-top: 16px;
}

.similar {
  margin-top: 8px;
  max-height: 160px;
  overflow-y: auto;
}
.similar::-webkit-scrollbar {
  width: 4px;
}
.similar::-webkit-scrollbar-track {
  background: var(--c-light);
  border-radius: 4px;
}
.similar::-webkit-scrollbar-thumb {
  background: var(--c-gray);
  border-radius: 4px;
}
.similar::-webkit-scrollbar-thumb:hover {
  background: var(--c-blue);
}

.meta {
  display: flex;
  align-items: center;
  height: 24px;
}

.value {
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: var(--c-gray);
  margin-right: 16px;
}
.value span {
  font-weight: 700;
}
</style>
