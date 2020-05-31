<template>
  <div class="uploader">
    <RoundedButton icon="image" @click="$refs.input.click()" />
    <input hidden ref="input" type="file" accept="image/png, image/jpeg" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.input.onchange = () => {
      if (this.$refs.input.files[0].size > 0.5 * 1024 * 1024) {
        alert("Максимальный размер изображения 512 Кб!");
        this.$refs.input.value = "";
      }

      const file = this.$refs.input.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.$emit("load", reader.result);
      };
    };
  }
};
</script>

<style lang="scss" scoped>
.uploader {
  display: inline-block;
  margin-right: 16px;
}
</style>
