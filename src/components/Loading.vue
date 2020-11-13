<template>
  <div class="loading__position" v-if="isLoading">
    <div class="outside">
      <div class="rabbit">
        <div class="rabbit--head">
          <div class="rabbit--ears ears__left"></div>
          <div class="rabbit--ears ears__right"></div>
          <div class="rabbit--eyes eyes__left"></div>
          <div class="rabbit--eyes eyes__right"></div>
          <div class="rabbit--nose"></div>
          <div class="mouth">
            <div class="tooth"></div>
            <div class="tooth__right"></div>
          </div>
        </div>
      </div>
    </div>
    <div>Loading...</div>
  </div>
</template>

<script>
export default {
  props: ["isLoading"]
};
</script>
<style lang="scss" scoped>
.loading__position {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.outside {
  @include shape(160px, 160px, 50%, absolute);
  border: 1px solid gray;
  animation: ro 2s infinite linear;
}
.rabbit {
  &--head {
    @include shape(55px, 65px, 50%, relative);
    background-color: darkgray;
  }
  &--eyes {
    @include shape(4px, 4px, 50%, absolute);
    background-color: rgb(60, 60, 60);
  }
  &--nose {
    @include shape(6px, 9px, 50% 50% 90% 90%, absolute);
    background-color: gray;
    bottom: 25px;
    left: 28px;
  }
  &--ears {
    @include shape(50px, 16px, 50%, absolute);
    background-color: darkgray;
    bottom: 25px;
    left: 28px;
  }
}
.ears {
  &__left {
    transform: rotate(-20deg);
    top: -30px;
    left: 13px;
  }
  &__right {
    transform: rotate(20deg);
    top: -30px;
    right: 15px;
  }
}
.eyes {
  &__left {
    left: 35%;
    top: 18px;
  }
  &__right {
    right: 35%;
    top: 18px;
  }
}
.mouth {
  @include shape(1px, 16px, 0, absolute);
  background-color: white;
  bottom: 21px;
  left: 24px;
}
.tooth {
  @include shape(6px, 4px, 20%, absolute);
  background-color: white;
  left: 3px;

  &__right {
    @include shape(6px, 5px, 20%, absolute);
    background-color: white;
    right: 3px;
  }
}
@keyframes ro {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
