<template>
  <v-toolbar app>
    <v-toolbar-side-icon>
      <v-icon>{{ ToolBarSideIcon }}</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title><strong>Binaryyard</strong></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>About</v-btn>
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
            @click="servicesClickHandler(service)"
          >
            <v-list-tile-title>{{ service.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'myToolbar',
  data: ()=>({
    ToolBarSideIcon: 'fas fa-bars',
    AngleDownIcon: 'fas fa-caret-down',
    services: [
      { title: 'Prototype' },
      { title: 'CMS' },
      { title: 'Workshops' },
    ]
  }),
  methods:{
    servicesClickHandler: (service)=> {
      switch(service.title){
        case 'Prototype':
          break
        case 'CMS':
          break
        case 'Workshops':
          break
        default:
          break
      }
    }
  }
}
</script>

