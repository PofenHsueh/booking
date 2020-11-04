<template>
  <div>
    <div class="cardList">
      <h1 class="text-color">Recommend</h1>
      <h4>You may be interested in our popular rooms</h4>
      <v-col class="cardList--card">
        <v-card v-for="type in typeItems" :key="type.title" flat width="350">
          <v-img :src="type.src" aspect-ratio="1.46"></v-img>
          <div class="cardList--card--text">
            <span>{{ type.title }}</span>
            <p>{{ type.subtitle }}</p>
          </div>
        </v-card>
      </v-col>
    </div>
    <v-col class="box">
      <v-img :src="imgSrc.main" style="height:352px;"></v-img>
      <div class="box--text">
        <h1>Reserve the best service</h1>
        <h6 class="text-color">over 50,000 commendations from our guests</h6>
      </div>
    </v-col>
    <v-col v-for="(room, index) in info" :key="index" class="info">
      <div class="info--title">
        <h1>{{ room.title }}</h1>
        <h6>{{ room.subtitle }}</h6>
      </div>
      <v-card flat>
        <v-img width="350" aspect-ratio="1.46" :src="room.src"></v-img>
        <v-card-text class="info--img--subtitle">
          <h3>{{ room.type }}</h3>
          <p>{{ room.price }}</p>
        </v-card-text>
      </v-card>
      <v-card flat>
        <v-img width="350" aspect-ratio="1.46" :src="room.src2"></v-img>
        <v-card-text class="info--img--subtitle">
          <h3>{{ room.type2 }}</h3>
          <p>{{ room.price2 }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: {
        main: require("@/assets/img/main.jpeg")
      },
      info: [
        {
          title: "One person",
          subtitle: "Enjoy the one and only service",
          type: "Single Room",
          type2: "Deluxe Single Room",
          price: "$1,380 NTD / night",
          price2: "$1,899 NTD / night",
          src: require("@/assets/img/SingleRoom.jpeg"),
          src2: require("@/assets/img/DeluxeRoom.jpeg")
        },
        {
          title: "Two people",
          subtitle: "The perfect choice for both of you",
          type: "Double Room",
          price: "$2,460 NTD / night",
          src: require("@/assets/img/DoubleRoom.jpeg"),
          type2: "Deluxe Double Room",
          price2: "$2,888 NTD / night",
          src2: require("@/assets/img/DeluxeDoubleRoom.jpeg")
        },
        {
          title: "Family",
          subtitle: "Wanna a big room? there you are",
          type: "Twin Room",
          price: "$3,350 NTD / night",
          src: require("@/assets/img/TwinRoom.jpeg"),
          type2: "Deluxe Twin Room",
          price2: "$3,899 NTD / night",
          src2: require("@/assets/img/DeluxeTwinRoom.jpeg")
        }
      ],
      typeItems: [
        {
          title: "Twin Room",
          subtitle: "$3,350 NTD / night",
          src: require("@/assets/img/TwinRoom.jpeg")
        },
        {
          title: "Double Room",
          subtitle: "$2,460 NTD / night",
          src: require("@/assets/img/DoubleRoom.jpeg")
        },
        {
          title: "Deluxe Single Room",
          subtitle: "$1,899 NTD / night",
          src: require("@/assets/img/DeluxeRoom.jpeg")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.cardList {
  margin: 0px $space-size;
  h1 {
    margin-top: 48px;
  }
  h4 {
    margin-bottom: 20px;
  }
  &--card {
    display: inline-flex;
    justify-content: space-between;
    &--text {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }
  }
}
.box {
  position: relative;
  overflow: hidden;
  margin: 10px 0px;
}
.box--text {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-right: $space-size;
  h1 {
    margin-bottom: 10px;
  }
  h6 {
    text-align: right;
  }
}
.text-color {
  color: $font-color;
}
.info {
  display: flex;
  padding: 0px $space-size;
  justify-content: space-between;
  &--title {
    width: 350px;
  }
  &--img--subtitle {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
}
</style>
