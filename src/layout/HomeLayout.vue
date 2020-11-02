<template>
  <div>
    <ToolBar :show="appbar" :barItems="barItems" reserve=true></ToolBar>
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
          <p v-if="item.title == 'ROOM'">{{ type }}</p>
          <p v-if="item.title != 'ROOM'">{{ item.title }}</p>
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
        <v-list style="padding:0px" v-show="show" outlined>
          <v-list-item
            v-for="(menu, index) in menuItems"
            :key="index"
            class="menu--list"
            @click="choose(menu)"
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
    <Footer></Footer>
  </div>
</template>
<script>
import ToolBar from "@/layout/ToolBar.vue";
import Footer from "@/layout/Footer.vue"
export default {
  components: {
    ToolBar,
    Footer
  },
  data() {
    return {
      type: "ROOM",
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
      }
    };
  },
  methods: {
    openMenu(item) {
      if (item.title == "ROOM") {
        this.show = !this.show;
        this.type = "ROOM";
      }
    },
    onIntersect(entries) {
      this.isIntersecting = entries[0].isIntersecting;
      if (this.isIntersecting) {
        this.appbar = false;
      } else {
        this.appbar = true;
      }
    },
    choose(type) {
      this.type = type;
      this.$router.push("/select");
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
</style>
