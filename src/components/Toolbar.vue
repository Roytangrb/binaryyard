<template>
  <div>
    <v-navigation-drawer 
      app
      right
      temporary
      v-model="drawer"
    >
      <div class="text-xs-right">
        <v-btn
          flat
          @click="drawer = false"
        >
          <v-icon>{{ CancelIcon }}</v-icon>
        </v-btn>
      </div>
      <v-list>
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/logo.png">
            </v-list-tile-avatar>
  
            <v-list-tile-content>
              <v-list-tile-title>Binaryyard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list-tile
          @click="sectionClickHandler({title:'home'})"
        >
          <v-list-tile-action>
            <v-icon>{{ HomeIcon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          :prepend-icon="ServiceIcon"
          :append-icon="AngleDownIcon"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Services</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(service, i) in services"
            :key="i"
            @click="sectionClickHandler(service)"
          >
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-title>{{ service.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          @click="sectionClickHandler({title:'contact'})"
        >
          <v-list-tile-action>
            <v-icon>{{ ContactIcon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-title><strong>Binaryyard</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          @click="sectionClickHandler({title:'home'})"
        >About</v-btn>
        <v-menu offset-y>
          <v-btn 
            flat
            slot="activator"
          >
            <span class="mr-1">Services</span>
            <v-icon>{{ AngleDownIcon }}</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(service, index) in services"
              :key="index"
              @click="sectionClickHandler(service)"
            >
              <v-list-tile-title>{{ service.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat
          @click="sectionClickHandler({title:'contact'})"
        >Contact</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon 
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
        <v-icon>{{ ToolBarSideIcon }}</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
  </div>  
</template>

<script>
export default {
  name: 'myToolbar',
  data: ()=>({
    ToolBarSideIcon: 'fas fa-bars',
    AngleDownIcon: 'fas fa-angle-down',
    HomeIcon: 'fas fa-home',
    ServiceIcon: 'fas fa-cubes',
    ContactIcon: 'far fa-handshake',
    CancelIcon: 'fas fa-times',
    services: [
      { title: 'Prototype' },
      { title: 'CMS' },
      { title: 'Workshops' },
      { title: 'Partners' }
    ],
    drawer: false
  }),
  methods:{
    sectionClickHandler (section) {
      this.drawer = !this.drawer
      switch(section.title){
        case 'home':
          break
        case 'contact':
          break
        case 'Prototype':
          break
        case 'CMS':
          break
        case 'Workshops':
          break
        case 'Partners':
          break
        default:
          break
      }
    }
  }
}
</script>

