<template>
  <div>
    <v-container>
      <div v-if="research != null && research.length === 0">
        <v-alert color="indigo lighten-2" type="error" max-witdh="500px">
          {{ $t('noresults') }}
        </v-alert>
      </div>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="4" offset-md="8">
          <v-text-field v-model="search" :label="$t('search')"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <home-result :pokemons="research" />
    <div v-if="!search">
      <home-result :pokemons="pokemons" />
    </div>
  </div>
</template>

<script>
import { gottaCatchEmAll } from '../services/pokemon'
import HomeResult from '../components/HomeResult.vue'

export default {
  name: 'HomePage',
  components: { HomeResult },
  data: () => ({
    error: '',
    pokemons: [],
    search: null,
  }),
  async mounted() {
    await this.getAllPokemons()
  },
  methods: {
    async getAllPokemons() {
      try {
        this.pokemons = await gottaCatchEmAll()
      } catch (error) {
        this.error = error
      }
    },
  },
  computed: {
    research() {
      if (this.search) {
        return this.pokemons.filter((p) => {
          return p.name.includes(this.search)
        })
      } else {
        return null
      }
    },
  },
}
</script>

<style></style>
