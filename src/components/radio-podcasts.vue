<template>
  <div>
    <h2 class="display-2">Live Mix Podcast</h2>

    <v-btn large color="blue" href="https://s3.amazonaws.com/funkatron-random/media/Live%20Demo%20Mix%202005-04-01.mp3">Download Live
      Demo Mix 2004-04-01
      <v-icon right dark>file_download</v-icon>
    </v-btn>
    <v-list one-line subheader="">
      <v-subheader>Track Listing</v-subheader>
      <v-list-tile v-for="track in mixTracks">
        <v-list-tile-content>
          <v-list-tile-title>{{track.artist}}</v-list-tile-title>
          <v-list-tile-sub-title>{{track.track}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list>
      <v-subheader>I also used loops from these additional songs:</v-subheader>
      <v-list-tile v-for="loop in mixLoops">
        <v-list-tile-content>
          <v-list-tile-title>{{loop.artist}}</v-list-tile-title>
          <v-list-tile-sub-title>{{loop.track}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <h2 class="display-2 mt-5">Radio Shows</h2>
    <div v-for="show in radioShows">
      <v-btn large color="blue" :href="show.url">{{show.name}}
        <v-icon right dark>file_download</v-icon>
      </v-btn>
    </div>

  </div>
</template>

<script>
  export default {
    name: "radio-podcasts",
    data() {
      return {
        mixTracks: [
          {
            artist: "Icon of Coil",
            track: "Floorkiller (2004)"
          },
          {
            artist: "Combichrist",
            track: "Enjoy the Abuse"
          },
          {
            artist: "Cubanate",
            track: "Oxyacetylene"
          },
          {
            artist: "C-Tec",
            track: "Brutal"
          },
          {
            artist: "Cult of Jester",
            track: ".44 Caliber (ironvsiron remix)"
          },
          {
            artist: "Deitiphobia",
            track: "Retrofit (Dead Agent remix)"
          },
          {
            artist: "Nitzer Ebb",
            track: "Getting Closer"
          },
          {
            artist: "Frontline Assembly",
            track: "Mindphaser"
          },
          {
            artist: "Frontline Assembly",
            track: "Sado-Masochist"
          },
          {
            artist: "ohGr",
            track: "Lusid"
          },
          {
            artist: "Prodigy",
            track: "Girls"
          },
          {
            artist: "Voxis",
            track: "You Spin Me Right Round"
          }
        ],
        mixLoops: [
          { artist: "Implant", track: "Drugs vs Violent"},
          { artist: "VNV Nation", track: "Circling Overland" },
          { artist: "VNV Nation", track: "Kingdom (restoration)" }
        ],
        radioShows: [
          {
            name: "Funkatron Radio Show 2007-03-22",
            url: "https://s3.amazonaws.com/funkatron-random/media/PSR_Funkatron_Show-20070322.mp3",
          },
          {
            name: "Funkatron Radio Show 2007-03-03",
            url: "https://s3.amazonaws.com/funkatron-random/media/PSR_Funkatron_Show-20070303.mp3",
          },
          {
            name: "Funkatron Radio Show 2006-11-30",
            url: "https://s3.amazonaws.com/funkatron-random/media/PSR_Funkatron_Show-20061130.mp3",
          },
          {
            name: "Funkatron Radio Show 2006-11-09",
            url: "https://s3.amazonaws.com/funkatron-random/media/PSR_Funkatron_Show-20061109.mp3",
          },
          {
            name: "Funkatron Radio Show 2006-10-26",
            url: "https://s3.amazonaws.com/funkatron-random/media/PSR_Funkatron_Show-20061026.mp3",
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
