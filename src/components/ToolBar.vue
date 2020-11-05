<template>
  <v-toolbar
    height="72"
    color="grey lighten-4"
    v-show="show"
    :style="{ position: position }"
  >
    <v-btn height="72" width="150" color="#000000" @click="home()">
      <i>HH</i>
    </v-btn>
    <v-btn
      depressed
      height="72"
      tile
      v-for="(item, index) in barItems"
      :key="index"
      color="#ffffff"
      :style="{ display: 'flex', justifyContent: justifyContent }"
    >
      <v-icon>mdi-{{ item.icon }}</v-icon>
      <p>{{ item.title }}</p>
      <v-icon>mdi-menu-down</v-icon>
    </v-btn>
    <v-btn depressed height="72" dark color="#569DC3" tile v-show="reserve"
      >RESERVE NOW</v-btn
    >
  </v-toolbar>
</template>
<script>
export default {
  props: ["show", "barItems", "reserve", "position", "justifyContent"],
  methods: {
    home() {
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
::v-deep .v-toolbar__content {
  justify-content: space-around;
  padding: 4px 0px;
}
.v-toolbar {
  width: 100%;
  z-index: 99;
  .v-btn {
    display: flex;
    flex: 1 1 auto;
    width: 100%;
  }
}
i {
  color: white;
  font-size: 36px;
  font-weight: bold;
}
</style>
