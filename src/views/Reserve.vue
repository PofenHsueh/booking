<template>
  <div style="display:flex; justify-content:center">
    <v-card
      style="width:45%;margin:50px;
    "
      flat
    >
      <h1>
        Reservation<br />
        Received!
      </h1>
      <v-list>
        <v-list-item v-for="person in reserveInfo" :key="person.title">
          <h3>{{ person.title }}</h3>
          <p class="list__position">{{ person.content }}</p>
        </v-list-item>
        <v-list-item>
          <h3>ROOM</h3>
          <p class="list__position"></p>
        </v-list-item>
        <v-list-item v-for="(date, index) in reserveDate" :key="index">
          <h3>{{ date.title }}</h3>
          <p class="list__position">{{ date.date }}</p>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-btn depressed height="60" width="100%" outlined tile
          >EDIT RESERVATION</v-btn
        >
        <v-btn
          depressed
          height="60"
          width="100%"
          dark
          color="#569DC3"
          tile
          @click="$router.push('/')"
          >HOMEPAGE</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reserveInfo: [
        { title: "GUEST", content: "Jade" },
        { title: "PHONE", content: "0912-345678" }
      ],
      reserveDate: [
        { title: "CHECK-IN", date: "test" },
        { title: "CHECK-OUT", date: "123" }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.v-list-item {
  border-bottom: 1px solid grey;
  padding: 10px;
  &:nth-last-child(2) {
    border-bottom: none;
  }
}
.v-card {
  &__actions {
    .v-btn {
      display: flex;
      flex: 1 1 auto;
      margin: 5px;
    }
  }
}
.list__position {
  margin-left: auto;
}
</style>
