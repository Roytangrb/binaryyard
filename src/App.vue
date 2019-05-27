<template>
  <v-app id="app">
    <Toolbar></Toolbar>
    <v-content>
      <v-container fluid>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Binaryyard"/>
        <!-- <router-view></router-view> -->
      </v-container>
      <h1>Partners</h1>
      <Partners></Partners>
      <h1>Contact Us</h1>
      <Enquiry></Enquiry>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import HelloWorld from './components/HelloWorld'
import Partners from './components/Partners'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Toolbar,
    HelloWorld,
    Partners,
    Enquiry,
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
</style>
