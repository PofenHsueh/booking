<template>
  <v-col class="footer">
    <v-img
      :src="images.footerSrc"
      height="352"
      class="footer--img"
      v-if="this.$route.path !== '/info'"
    ></v-img>
    <hr v-if="this.$route.path == '/info'" class="margin__space" />
    <p>
      © 2020 Hotel. All rights reserved.
    </p>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      images: {
        footerSrc: require("@/assets/img/footer-map.jpg")
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.footer {
  &--img {
    margin-top: 20px;
    margin-right: $space-size;
  }
  p {
    margin-left: $space-size;
  }
}
</style>
