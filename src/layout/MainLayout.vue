<template>
  <div>
    <v-toolbar height="72" color="grey lighten-4" v-show="appbar">
      <v-btn height="72" width="150" color="#000000">
        <i>HH</i>
      </v-btn>
      <v-btn
        depressed
        height="72"
        tile
        v-for="(item, index) in barItems"
        :key="index"
        color="#ffffff"
      >
        <v-icon>mdi-{{ item.icon }}</v-icon>
        <p>{{ item.title }}</p>
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>
      <v-btn depressed height="72" dark color="#569DC3" tile>RESERVE NOW</v-btn>
    </v-toolbar>
    <v-col class="header">
      <v-col class="box" cols="10">
        <h1>Hotel</h1>
        <v-img :src="images.mainSrc"></v-img>
      </v-col>
      <v-col cols="3" class="header--menu" v-intersect="onIntersect">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          class="header--menu--btn"
          depressed
          height="60"
          width="100%"
          outlined
          tile
          @click="openMenu(item)"
        >
          <v-icon>mdi-{{ item.icon }}</v-icon>
          <p>{{ item.title }}</p>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
        <v-list style="padding:0px" v-show="show" outlined>
          <v-list-item
            v-for="(menu, index) in menuItems"
            :key="index"
            class="menu--list"
          >
            <p>{{ menu }}</p>
          </v-list-item>
        </v-list>
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
    </v-col>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-col class="footer">
      <v-img :src="images.footerSrc" height="352" class="footer--img"></v-img>
      <p>© 2020 Hotel. All rights reserved.</p>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      appbar: false,
      show: false,
      barItems: [
        { title: "CHECK-OUT & CHECK-OUT", icon: "calendar-range" },
        { title: "ROOM", icon: "bed" }
      ],
      menuItems: [
        "single room",
        "deluxe single room",
        "double room",
        "deluxe double room",
        "twin room",
        "deluxe twin room"
      ],
      items: [
        { title: "CHECK-IN", icon: "calendar-range" },
        { title: "CHECK-OUT", icon: "calendar-range" },
        { title: "ROOM", icon: "bed" }
      ],
      roomItems: [
        "Single Room",
        "Deluxe Single Room",
        "Double Room",
        "Delux Double Room",
        "Twin Room",
        "Delux Twin Room"
      ],
      images: {
        mainSrc: require("@/assets/img/main.jpeg"),
        footerSrc: require("@/assets/img/footer-map.jpg")
      }
    };
  },
  methods: {
    openMenu(item) {
      if (item.title == "ROOM") {
        this.show = !this.show;
      }
    },
    onIntersect(entries) {
      this.isIntersecting = entries[0].isIntersecting;
      if (this.isIntersecting) {
        this.appbar = false;
      } else {
        this.appbar = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  height: 350px;
  position: relative;
  overflow: hidden;
  padding: 64px 0px 0px 85px;
  h1 {
    writing-mode: vertical-lr;
    z-index: 999;
    position: absolute;
    background-color: $background-primary;
    color: $title-color;
  }
}
.header {
  position: relative;
  &--menu {
    position: absolute;
    right: $space-size;
    top: 120px;
    &--btn {
      display: flex;
      border-width: 1px 1px 0px 1px;
      justify-content: flex-start;
      &:hover {
        background-color: $click-color;
        color: $background-primary;
      }
    }
  }
}
.v-icon {
  justify-content: flex-start;
  margin-right: 15px;
}
.menu--list {
  z-index: 99;
  background-color: $background-primary;
  height: 60px;
  font-size: 16px;
  &:hover {
    background-color: $hover-color;
    border: 1px solid grey;
  }
}
.v-toolbar {
  position: fixed;
  width: 100%;
  z-index: 99;
  .v-btn {
    display: flex;
    flex: 1 1 auto;
  }
}
.footer {
  &--img {
    margin-top: 20px;
    margin-right: 85px;
  }
  p {
    margin-left: $space-size;
  }
}
::v-deep .v-toolbar__content {
  justify-content: space-around;
  padding: 4px 0px;
}
i {
  color: white;
  font-size: 36px;
  font-weight: bold;
}
</style>
