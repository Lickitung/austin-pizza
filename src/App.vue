<template>
  <div id="app">
    <div class="container">
      <ap-header/>
    </div>
    <div class="container">
      <ap-menu/>
    </div>
    <div class="container">
      <ap-footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'

export default {
  components: {
    apHeader: Header,
    apFooter: Footer,
    apHome: Home,
    apMenu: Menu 
  }
}
</script>

<style>

</style>
