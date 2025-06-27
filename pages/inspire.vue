<template>
  <v-row>
    <v-col cols="12" md="12">
      <carousel/>

    </v-col>
    <v-col cols="12" md="6">
      <v-img height="300" contain src="456789.webp"></v-img>
    </v-col>
    <v-col cols="12" md="6">
      <v-icon size="40" color="red">mdi-account</v-icon>
    </v-col>
    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
import carousel from '~/components/carousel.vue';
export default {
  components:{carousel},
  name: 'InspirePage',
}
</script>
