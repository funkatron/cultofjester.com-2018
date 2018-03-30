<template>
  <div>
    <h2 class="display-3">Cult of Jester</h2>
    <h3 class="display-1 mt-2">Industrial-electro-machine rock from the underground</h3>
    <p class="mt-2">{{bio}}</p>

    <v-card class="mt-5">
      <v-card-media><img class="cover-art" src="../assets/funkatron-1000.jpg"></v-card-media>
      <v-card-title primary-title><h3 class="display-1">Funkatron (Remastered)</h3></v-card-title>
      <v-card-text>The debut album from COJ. This rerelease has been remastered for your listening pleasure, and
        features 5 additional bonus tracks.
      </v-card-text>
      <v-card-actions>
        <v-menu offset-y>
          <v-btn color="blue" slot="activator">Listen</v-btn>
          <v-list>
            <v-list-tile v-for="item in funkatronListenLinks" :key="item.label" :href="item.url" target="_blank">
              <v-list-tile-title>{{item.label}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn color="green" slot="activator">Buy</v-btn>
          <v-list>
            <v-list-tile v-for="item in funkatronBuyLinks" :key="item.label" :href="item.url" target="_blank">
              <v-list-tile-title>{{item.label}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-actions>
    </v-card>

    <v-card class="mt-5">
      <v-card-media><img class="cover-art" src="../assets/g13-1000.jpg"></v-card-media>
      <v-card-title primary-title><h3 class="display-1">Golgo 13</h3></v-card-title>
      <v-card-text>The sophmore success, this machine rock hybrid incorporates elements of industrial metal, funk, electro, and more.
      </v-card-text>
      <v-card-actions>
        <v-menu offset-y>
          <v-btn color="blue" slot="activator">Listen</v-btn>
          <v-list>
            <v-list-tile v-for="item in g13ListenLinks" :key="item.label" :href="item.url" target="_blank">
              <v-list-tile-title>{{item.label}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn color="green" slot="activator">Buy</v-btn>
          <v-list>
            <v-list-tile v-for="item in g13BuyLinks" :key="item.label" :href="item.url" target="_blank">
              <v-list-tile-title>{{item.label}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
  export default {
    name: "coj",
    data() {
      return {
        bio: "Back from the ashes, COJ returns with digital releases of both full-length albums.",
        funkatronListenLinks: [
          {
            label: "Apple Music",
            url: "https://itunes.apple.com/us/album/funkatron-remastered/id1279813484?uo=4&app=music&at=1001lry3&ct=dashboard"
          },
          {label: "Spotify", url: "https://open.spotify.com/album/4ulgXf2OBdhEJJlWKZXaAs"},
          {
            label: "Google Play",
            url: "https://play.google.com/store/music/album/Cult_of_Jester_Funkatron_Remastered?id=Bcqsdlytlwuj7srkpm2eibhuuly"
          },
        ],
        funkatronBuyLinks: [
          {
            label: "iTunes",
            url: "https://itunes.apple.com/us/album/funkatron-remastered/id1279813484?uo=4&app=itunes&at=1001lry3&ct=dashboard"
          },
          {
            label: "Google Play",
            url: "https://play.google.com/store/music/album/Cult_of_Jester_Funkatron_Remastered?id=Bcqsdlytlwuj7srkpm2eibhuuly"
          },
          {label: "Amazon", url: "http://www.amazon.com/gp/product/B075BSHJ9W/?tag=distrokid06-20"}
        ],
        g13ListenLinks: [
          {
            label: "Apple Music",
            url: "https://itunes.apple.com/us/album/golgo-13/id1278674499?uo=4&app=music&at=1001lry3&ct=dashboard"
          },
          {label: "Spotify", url: "https://open.spotify.com/album/6OG36dQwkOWXMmWF4CqM0s"},
          {label: "Google Play", url: "https://play.google.com/store/music/album?id=B6crejfwsdwiskntonxm7hweubu&tid=song-Tt5sz7lllaq7dk6hdm35tnszzeq"},
          {label: "Youtube", url: "https://www.youtube.com/watch?v=SLvNO-UEbnI&list=PL0MLPz3ghEAthvOS5TUmVqPGqoa_zFs5d"}
        ],
        g13BuyLinks: [
          {label: "iTunes", url: "https://itunes.apple.com/us/album/golgo-13/id1278674499?uo=4&app=itunes&at=1001lry3&ct=dashboard"},
          {label: "Google Play", url: "https://play.google.com/store/music/album?id=B6crejfwsdwiskntonxm7hweubu&tid=song-Tt5sz7lllaq7dk6hdm35tnszzeq"},
          {label: "Amazon", url: "http://www.amazon.com/gp/product/B075C5FF17/?tag=distrokid06-20"}
        ]
      }
    }
  }
</script>

<style scoped>
  .cover-art {
    width:100%;
    height:100%;
  }
</style>
