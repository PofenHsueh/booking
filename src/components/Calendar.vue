<template>
  <div class="calender" v-show="show" :style="{ position: position }">
    <v-col class="calender--btn">
      <span>
        <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="ma-2" @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </span>
      <v-calendar
        ref="calendar"
        color="primary"
        :value="changes"
        @input="$emit('input', $event)"
        @click:date="$emit('click')"
      ></v-calendar>
    </v-col>
  </div>
</template>
<script>
export default {
  model: {
    prop: "changes",
    event: "input"
  },
  props: ["changes", "show", "position"]
};
</script>
<style lang="scss" scoped>
.calender {
  background-color: white;
  width: 100%;
  z-index: 99;
  &--btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
