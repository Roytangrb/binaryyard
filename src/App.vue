<template>
  <v-app id="app">
    <Toolbar></Toolbar>
    <v-content>
      <v-container fluid>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </v-container>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Toolbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* fade in effect */
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-enter {
  opacity: 0;
}
</style>
