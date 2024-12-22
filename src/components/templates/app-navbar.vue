<template>
    <b-navbar class="navbar navbar-expand-lg navbar-light bg-gradient-to-b from-white to bg-pink-400">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img :src="image" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <span class="self-center p-2 bg-gradient-to-r from-pink-900 to-pink-600 bg-clip-text text-transparent font-semibold whitespace-nowrap dark:text-white drop-shadow-lg">Барбиграм</span></a>
          <button class="navbar-toggler"   type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">  
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/profile">Аккаунт</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/messenger">Мессенджер</a>
              </li>
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  
 @click="showMenu = !showMenu">
                    Публикации
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ show: showMenu }">
                    <li><a class="dropdown-item" href="/news">Новости</a></li>
                    <li><a class="dropdown-item" href="/your_news">Ваши публикации</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="/new">Новое</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
              <a href="#" class="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Найти</a>
            </form>
          </div>
        </div>
    </b-navbar>

</template>

<script>
export default {
  name: 'app-navbar',
  data () {
    return {
      showMenu: false,
      image: require('@/assets/logo.png')
    }
  }
}
</script>

<style>
  .dropdown-menu {
  display: none;
  position: absolute;
  z-index: 1;
}

.dropdown-menu.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}
</style>