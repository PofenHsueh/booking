<template>
  <div>
    <ToolBar
      :show="true"
      :barItems="barItems"
      :reserve="false"
      position="relative"
    ></ToolBar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </div>
</template>
<script>
import ToolBar from "@/components/ToolBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    ToolBar,
    Footer
  },
  data() {
    return {
      barItems: [{ title: "ROOM STYLE", icon: "bed" }]
    };
  }
};
</script>
