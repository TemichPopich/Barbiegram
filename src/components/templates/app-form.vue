<template>
  <div class="container bg-gradient-to-r from-pink-50 to bg-pink-400 p-10 rounded-lg"
    style="width: 50%; text-align: center; vertical-align: middle;">
    <h2 class="font-semibold drop-shadow-lg mb-3">
      <span class="p-2 bg-gradient-to-b from-pink-700 to-pink-400 bg-clip-text text-transparent">{{ text }}</span>
    </h2>
    <form class="max-w-sm mx-auto">
      <div class="mb-3">
        <label for="email" class="block mb-2 text-sm font-semibold text-purple-900 dark:text-white">Email</label>
        <input type="email" id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com" required 
          v-model.trim="email"/>
      </div>
      <div class="mb-3">
        <label text for="password"
          class="block mb-2 text-sm font-semibold text-purple-900 dark:text-white">Пароль</label>
        <input type="password" id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required 
          v-model.trim="password"/>
      </div>
      <div class="mb-3">
        <label class="block mb-2 text-sm font-semibold text-purple-900 dark:text-white">Имя пользователя</label>
        <input type="password" id="repeat-password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required 
          v-model.trim="username"/>
      </div>
      <button type="submit"
        class="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{{
          text }}</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      username: ''
    }
  },
  props: {
    text: {
      type: String,
      default: "Регистрация",
      require: true
    }
  }
}
</script>