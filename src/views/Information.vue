<template>
  <div class="info">
    <v-col cols="3" class="info--persional">
      <h1>Reservation<br />Information</h1>
      <div
        v-for="(item, index) in infoData"
        :key="index"
        :class="getColor(index, item.change)"
      >
        <v-icon :class="getColor(index, item.change)"
          >mdi-{{ item.icon }}</v-icon
        >
        <p class="display-inline">
          <strong>{{ item.title }}</strong>
        </p>
        <v-text-field
          color="#569dc3"
          @focus="item.change = true"
          @blur="item.change = false"
        ></v-text-field>
      </div>
      <v-btn width="100%" depressed height="60" dark color="#569DC3" tile
        >RESERVE NOW</v-btn
      >
    </v-col>
    <v-col cols="3" style="margin:42px">
      <v-card class="info--type" flat outlined>
        <v-img :src="getImg($route.query.from)" aspect-ratio="1.71"></v-img>
        <h2>{{ $route.query.from }}</h2>
        <hr />
        <v-list>
          <v-list-item v-for="(type, index) in types" :key="index">
            <v-icon>mdi-calendar-range</v-icon>
            <h3>{{ type.title }}</h3>
            <p class="list__position">{{ type.date }}</p>
          </v-list-item>
          <v-list-item v-for="money in total" :key="money.price">
            <p>{{ money.price }}</p>
            <p class="list__position">
              {{ money.amount }}
            </p>
          </v-list-item>
          <v-list-item>
            <p>TOTAL</p>
            <p class="list__position"><strong>$10,988</strong></p>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infoData: [
        { title: "NAME", icon: "account", change: false },
        { title: "PHONE", icon: "cellphone-iphone", change: false }
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
    },
    getColor(index, change) {
      if (change) {
        return "info--persional__focus" + "-" + index;
      }
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
    padding: 42px 20px 20px 20px;
    margin: 0px 85px;
    h1 {
      margin-bottom: 15px;
    }
  }
  &--type {
    h2,
    section {
      padding: 15px;
    }
  }
}
.v-list-item {
  border-bottom: 1px solid grey;
  &:nth-last-child(1) {
    border-bottom: none;
  }
}
.list__position {
  margin-left: auto;
}
</style>
