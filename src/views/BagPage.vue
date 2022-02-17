<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="pokemon in bag" :key="pokemon.name">
                <v-card class="mx-auto ma-5" max-width="344" outlined m-2>
                    <pokemon-card :pokemon="pokemon" />
                    <v-card-actions>
                        <router-link
                            :to="{
                                name: pokemonPage,
                                params: { name: pokemon.name },
                            }"
                            class="text-decoration-none"
                        >
                            <v-btn outlined color="indigo lighten-2">
                                Details
                            </v-btn>
                        </router-link>
                        <v-spacer />
                        <v-btn
                            @click="removePokemon(pokemon)"
                            outlined
                            color="indigo lighten-2"
                            >{{ $t('buttondelete') }}</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <snack-bar
            :pokemonName="pokemonName"
            :text="text"
            :snackbar="snackbar"
            @disabled-snack="disabledSnack"
        />
    </v-container>
</template>

<script>
import { POKEMON_PAGE } from '../router/routesNames'
import { REMOVE_POKEMON } from '../store/storeConstants'
import PokemonCard from '../components/PokemonCard.vue'
import SnackBar from '../components/SnackBar.vue'
import * as constants from '../components/componentConst'
export default {
    name: 'BagPage',
    components: { PokemonCard, SnackBar },
    data() {
        return {
            pokemonPage: POKEMON_PAGE,
            pokemonName: '',
            snackbar: false,
            text: '',
        }
    },
    methods: {
        removePokemon: function (pokemon) {
            this.$store.commit(REMOVE_POKEMON, pokemon)
            this.pokemonName = pokemon.name
            this.snackbar = true
            this.text = constants.REMOVE_MESSAGE
        },
        disabledSnack: function () {
            this.snackbar = false
        },
    },
    computed: {
        bag() {
            return this.$store.state.bag
        },
        isBagEmpty() {
            if (this.$store.state.bag.length > 0) {
                return false
            } else {
                return true
            }
        },
    },
}
</script>

<style></style>
