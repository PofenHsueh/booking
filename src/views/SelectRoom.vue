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
        <v-btn
          depressed
          height="60"
          width="100%"
          outlined
          tile
          @click="isShow = !isShow"
        >
          <v-icon>mdi-calendar-range</v-icon>
          <p>CHECH-IN</p>
          <v-icon v-show="!startDates">mdi-menu-down</v-icon>
          <p style="color:blue">{{ startDates }}</p></v-btn
        >
        <Calender
          v-model="startDates"
          :show="isShow"
          @click="isShow = !isShow"
        ></Calender>
        <v-btn
          depressed
          height="60"
          width="100%"
          outlined
          tile
          @click="shows = !shows"
        >
          <v-icon>mdi-calendar-range</v-icon>
          <p>CHECK-OUT</p>
          <v-icon v-show="!endDates">mdi-menu-down</v-icon>
          <p style="color:blue">{{ endDates }}</p></v-btn
        >
        <Calender
          v-model="endDates"
          :show="shows"
          @click="shows = !shows"
        ></Calender>
        <v-btn width="100%" depressed height="60" dark color="#569DC3" tile
          >RESERVE NOW</v-btn
        >
      </v-col>
    </div>
    <section class="description">
      <h3>Description</h3>
      <p>1 Guest・1 Bed (Small Double)・1 Private Bath・22 m²</p>
      <p class="description--text">
        Deluxe Single Room is only reserved for one guest. There is a bedroom
        with a small double size bed and a private bathroom. Everything you need
        prepared for you: sheets and blankets, towels, soap and shampoo,
        hairdryer are provided. In the room there is AC and of course WiFi.
      </p>
      <p>Check-in is from 3pm to 7pm</p>
      <p>Check-out is before 11am</p>
    </section>
    <section class="features">
      <h3>Amenities</h3>
      <span v-for="(item, index) in icons" :key="index"
        ><v-icon>mdi-{{ item.icon }}</v-icon>
        <p>{{ item.name }}</p></span
      >
    </section>
  </div>
</template>
<script>
import Calender from "@/components/Calender.vue";
export default {
  components: {
    Calender
  },
  data() {
    return {
      startDates: "",
      endDates: "",
      isShow: false,
      shows: false,
      icons: [
        { name: "Wi-Fi", icon: "wifi" },
        { name: "Television", icon: "television" },
        { name: "Great View", icon: "terrain" },
        { name: "Breakfast", icon: "silverware-fork-knife" },
        { name: "Air Conditioner", icon: "snowflake" },
        { name: "Smoke Free", icon: "smoking-off" },
        { name: "Mini Bar", icon: "glass-cocktail" },
        { name: "Refrigerator", icon: "power-plug" },
        { name: "Child Friendly", icon: "face" },
        { name: "Room Service", icon: "room-service-outline" },
        { name: "Sofa", icon: "seat" },
        { name: "Pet Friendly", icon: "nature-people" }
      ]
    };
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
    top: 40%;
    text-align: right;
    z-index: 99;
  }
  &--btn {
    z-index: 99;
    position: absolute;
    right: $space-size;
    bottom: 15%;
    background-color: $background-primary;
  }
  .calender__position {
    position: relative;
  }
}
.description {
  width: 40%;
  margin: 0px $space-size;
  h3{
    margin:20px 0px;
  }
  p {
    color: $font-color;
  }
  &--text{
    margin:20px 0px;
  }
}
.features {
  display: flex;
  margin-left: $space-size;
  width: 50%;
  flex-wrap: wrap;
  h3{
    margin:20px 0px;
    width: 100%;
  }
  span {
    width: 150px;
    margin: 20px 20px 20px 0px;
  }
  p {
    margin-left:10px;
    display: inline;
  }
}
</style>
