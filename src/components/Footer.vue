<template>
  <v-footer height="auto">
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text"
      width="100%"
      height="auto"
    >
      <v-container>
        <v-layout row>
          <v-flex md4 sm12>
            <v-card-text class="white--text text-xs-left">
              <h1>Binaryyard <br> ...</h1>
              <p>+852 1234 5678</p>
              <p>1a, 99/F, Binaryyard Building
              <br>Kowloon, Hong Kong</p>
            </v-card-text>
          </v-flex>

          <v-flex md4 class="hidden-sm-and-down">
            <v-card-text class="white--text text-xs-left">
              <p>About</p>
              <p>Services</p>
              <p>Projects</p>
              <p>Workshops</p>
            </v-card-text>
          </v-flex>
          <v-flex md4 class="hidden-sm-and-down">
            <v-card-text class="white--text text-xs-left">
              <p>About</p>
              <p>Services</p>
              <p>Projects</p>
              <p>Workshops</p>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-card-text class="text-xs-center">
                <v-btn
                  v-for="icon in icons"
                  :key="icon.shape"
                  class="mx-3 white--text"
                  icon
                  :href="icon.href"
                >
                <v-icon size="24px">{{ icon.shape }}</v-icon>
                </v-btn>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>
        <v-card-text class="text-xs-center">
          &copy;{{year}} - <strong>Binaryyard</strong>
        </v-card-text>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'myFooter',
  data: ()=> ({
    icons: [
      {shape:'far fa-envelope', href:'mailto:roytang.rb@gmail.com'},
      {shape:'fab fa-github', href:'https://github.com/Roytangrb'},
      {shape:'fab fa-facebook-square', href:''}
    ]
  }),
  computed:{
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>


