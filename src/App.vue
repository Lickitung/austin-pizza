<template>
  <div id="app">
    <div class="container">
      <ap-header/>
    </div>
    <div class="container">
      <ap-home/>
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

export default {
  components: {
    apHeader: Header,
    apFooter: Footer,
    apHome: Home 
  }
}
</script>

<style>

</style>
