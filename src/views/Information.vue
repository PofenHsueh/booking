<template>
  <div class="info">
    <v-col cols="3" class="info--persional">
      <h1>Reservation<br />Information</h1>
      <div v-for="(item, index) in infoData" :key="index">
        <v-icon>mdi-{{ item.icon }}</v-icon>
        <p class="display-inline">
          <strong>{{ item.title }}</strong>
        </p>
        <v-text-field></v-text-field>
      </div>
      <v-btn width="100%" depressed height="60" dark color="#569DC3" tile
        >RESERVE NOW</v-btn
      >
    </v-col>
    <v-col cols="3">
      <v-card class="info--type">
        <v-img :src="getImg($route.query.from)" aspect-ratio="1.71"></v-img>
        <h2>{{ $route.query.from }}</h2>
        <hr />
        <div
          v-for="(type, index) in types"
          :key="index"
          class="info--type--date"
        >
          <v-icon>mdi-calendar-range</v-icon>
          <h3>{{ type.title }}</h3>
          <p>{{ type.date }}</p>
          <hr />
        </div>
        <section v-for="money in total" :key="money.price">
          <p>{{ money.price }}</p>
          <p>
            <strong>{{ money.amount }}</strong>
          </p>
        </section>
        <hr />
        <section>
          <p>TOTAL</p>
          <p><strong>$10,988</strong></p>
        </section>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoData: [
        { title: "NAME", icon: "account" },
        { title: "PHONE", icon: "cellphone-iphone" }
      ],
      types: [
        { title: "CHECK-IN", date: "2020-11-04" },
        { title: "CHECK-OUT", date: "2020-11-09" }
      ],
      total: [
        { price: "$1,899 × 2 night", amount: "$3,798" },
        { price: "$2,000 × 3 night", amount: "$6,000" },
        { price: "Service Fee", amount: "$1,200" }
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
.display-inline {
  display: inline;
}
.info {
  display: flex;
  justify-content: center;
  &--persional {
    padding: 20px;
    margin: 0px 85px;
  }
  &--type {
    h2,
    section {
      padding: 15px;
    }
    // &--date{
    //   padding: 15px 0px;
    //   .v-icon{
    //     padding: 0px 15px;
    //   }
    // }
  }
}
</style>
