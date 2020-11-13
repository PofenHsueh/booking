<template>
  <v-app>
    <Loading :isLoading="isLoading"></Loading>
    <router-view v-show="!isLoading"></router-view>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/Loading.vue";
export default {
  computed: {
    ...mapGetters({
      isLoading: "loaded"
    })
  },
  components: {
    Loading
  }
};
</script>
<style lang="scss" scoped></style>
