<template>
  <div class="container" style="max-width: 60%;">
    <div class="card mb-3 mx-auto">
      <div class="row g-0 bg-gradient-to-r from-pink-50 to bg-pink-400">
        <div class="col-md-4">
          <img :src="user.image" style="width: 20vw; height: auto" class="img-fluid rounded-start" alt="Аватар пользователя">
        </div>
        <div class="col-md-8" style="height: 100%;">
          <div class="card-body">
            <h3 class="card-title"><span
                class="self-center p-2 bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent font-semibold whitespace-nowrap dark:text-white drop-shadow-lg">
                {{ user.name }}</span></h3>
            <p class="card-text">{{ user.bio }}</p>
            <p class="card-text"><small class="text-muted">{{ user.date }}</small></p>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex;">
      <div class="card " style="width: 50%; ">
        <div v-if="images" id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div v-for="(img, index) in images" :key="index" :class="index === 0 ? 'img_wrap carousel-item active' : 'img_wrap carousel-item'">
              <img :src="img" class="d-block" alt="user's photo">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="card-body rounded-lg  bg-gradient-to-b from-pink-50 to bg-pink-400">
          <h5 class="text-pink-800 font-semibold drop-shadow-lg">Ваши фотографии</h5>
          <p class="card-text">Галерея, где отображаются все фотографии с вашей страницы</p>
        </div>
      </div>
      <cardList class="w-50" :cards="cards" />
    </div>
  </div>
</template>

<script>

import cardList from './templates/card-list.vue';

export default {
  name: "AppProfile",
  components: {
    cardList
  },
  props: {
    user: {
      type: Object,
      default: () => ({
        image: require('@/assets/gosling_profile.jpg'),
        name: 'Райан Гослинг',
        bio: 'Я просто Кен, как бы поднятся мне с колен? Ну неужели суждено мне жить в жестком одиночестве? Просто Кен, я же прекрасный джентельмен!',
        date: 'Был в сети недавно'
      }),
      require: true
    },
    images: {
      type: Array,
      default: () => [
        'https://hellomagrussia.ru/uploads/0723/rajan-gosling-poet-tepery-my-slyshali-vse_50889_cover_1000x724.webp',
        'https://0d314c86-f76b-45cc-874e-45816116a667.selcdn.net/8c17eaa4-e750-48bd-a5ad-c325519a2f7f.jpeg',
        'https://kinotv.ru/upload/delight.webpconverter/upload/setka-editor/7ce/7ce04dd7df53cdee97706d4cda2a0c00/f209bea4ff90d43637279b31fa3950ea.png.webp?1700066200142228'
      ]
    }
  },
  data() {
    return {
      cards: [
        {
          name: "Барби",
          image: "https://icdn.lenta.ru/images/2022/05/12/12/20220512124155689/wide_4_3_431d46681a4b01ecf06b4652f88daa91.jpg"
        },
        {
          name: "Оппенгеймер",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2vzw4fIXFC6_m7T-_45E9lse4IcHQXohpQ&s"
        },
        {
          name: "Арсений Попов",
          image: require("../assets/areseny.jpg")
        },
        {
          name: "Максим Полтанов",
          image: require("../assets/max.jpg")
        }
      ]
    }
  }
}
</script>

<style>
body {
  text-align: center;
}

/* В файле App.vue или отдельном файле стилей */
.container {
  margin-top: 20px;
  margin-bottom: 20px;
}

.img-fluid {
  width: 150px;
  height: 150px;
}

.row {
  text-align: center;
  place-items: center;
}

.img_wrap {
  width: 100%;
  height: 400px;
  border-style: solid; 
}

.img_wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* object-position: 50 0; */
}
</style>