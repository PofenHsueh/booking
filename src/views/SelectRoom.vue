<template>
  <div>
    <div class="introduction">
      <v-col cols="9" class="introduction--img">
        <h1>{{ $route.query.from }}</h1>
        <v-img :src="getImg($route.query.from)" aspect-ratio="1.718"></v-img>
        <h3>WEEKDAY PRICE</h3>
      </v-col>
      <div class="introduction--text">
        <h2><strong>$1,899 NTD </strong>/ night</h2>
        <p>holiday price - $2,000 NTD / night</p>
      </div>
      <v-col cols="3" class="introduction--btn">
        <v-btn depressed height="60" width="100%" outlined tile>
          <v-icon>mdi-calendar-range</v-icon>
          <p>CHECH-IN</p>
          <v-icon>mdi-menu-down</v-icon></v-btn
        >
        <v-btn depressed height="60" width="100%" outlined tile>
          <v-icon>mdi-calendar-range</v-icon>
          <p>CHECK-OUT</p>
          <v-icon>mdi-menu-down</v-icon></v-btn
        >
         <v-btn
          width="100%"
          depressed
          height="60"
          dark
          color="#569DC3"
          tile
          v-show="!show"
          >RESERVE NOW</v-btn
        >
      </v-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    getImg(type) {
      let images = require.context("../assets/img/", false, /\.jpeg$/);
      return images("./" + type + ".jpeg");
    }
  }
};
</script>
<style lang="scss" scoped>
.introduction {
  padding: 39px $space-size 0px $space-size;
  display: flex;
  position: relative;
  &--img {
    position: relative;
    h1 {
      @include straight($background-primary, $title-color);
    }
    h3 {
      @include straight($font-color, white);
      right: -30px;
      top: 0px;
      padding: 4px 2px;
    }
  }
  &--text {
    position: absolute;
    right: $space-size;
    top: 38%;
    text-align: right;
  }
  &--btn{
     position: absolute;
      right: $space-size;
      bottom:15%;
      background-color:$background-primary
  }
}
</style>
