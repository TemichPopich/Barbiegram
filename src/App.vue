<template>
  <Navbar />
  <div class=" pb-5 bg-gradient-to-b from-pink-100 to bg-pink-300" style="min-height: 100vh; display: flex;
  align-items: center;">
      <RouterView/>
  </div>
  <AppFooter />
</template>

<script>
import Navbar from './components/templates/app-navbar.vue'
import AppFooter from './components/templates/app-footer.vue';
export default {
  name: 'App',
  components: { 
    Navbar, 
    AppFooter 
  }
}
</script>