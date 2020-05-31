<template>
  <div class="field">
    <input
      ref="input"
      :class="size"
      :type="type"
      autocomplete="off"
      :required="required"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    required: { type: Boolean, default: false },
    size: { type: String, default: "normal" },
    placeholder: { type: String },
    value: { type: String }
  }
};
</script>

<style scoped>
.field {
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 16px;
}

.field input {
  display: flex;
  width: 100%;
  border: none;
  font-weight: 500;
  position: relative;
}

.field input::placeholder {
  color: var(--c-gray);
}

.field input.normal {
  height: 32px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  border-bottom: 1px solid var(--c-light);
}

.field input.normal:focus {
  border-color: var(--c-blue);
}

.field input.small {
  height: 24px;
  margin-top: -16px;
  padding-bottom: 4px;
  font-size: 14px;
}
</style>
