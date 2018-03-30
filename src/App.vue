<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer
        fixed
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-tile to="/coj">
            <v-list-tile-content >COJ</v-list-tile-content>
          </v-list-tile>
          <v-list-tile href="https://deadagent.net" target="_blank">
            <v-list-tile-content >Dead Agent</v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/radio-podcasts">
            <v-list-tile-content >Radio and Podcasts</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
        <v-toolbar-title>Cult of Jester</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container>
          <v-layout justify-center
                    align-center>
            <v-flex xs12 sm8 md6>
              <!-- route outlet -->
              <!-- component matched by the route will render here -->
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer class="pa-5">
        <v-spacer></v-spacer>
        <p>Cult of Jester is <a href="https://funkatron.com">Ed Finkler</a>. &copy; 1994 – {{new Date().getFullYear()}} Funkatron Productions.</p>
      </v-footer>
    </v-app>

  </div>
</template>

<script>
  import Coj from "./components/coj";
  import RadioPodcasts from "./components/radio-podcasts";

  export default {
    name: 'app',
    components: {
      'coj': Coj,
      'radio-podcasts': RadioPodcasts
    },
    data() {
      return {
        drawer: false
      }
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer;
      }
    }
  }
</script>

<style lang="css">
</style>
