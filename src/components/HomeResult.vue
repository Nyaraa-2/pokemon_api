<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex
                xs12
                sm6
                md3
                lg4
                v-for="pokemon in pokemons"
                :key="pokemon.name"
            >
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
                            outlined
                            color="indigo lighten-2"
                            :disabled="disabledButton(pokemon)"
                            @click="addPokemon(pokemon)"
                        >
                            {{ $t('buttonadd') }}
                        </v-btn>
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
import { ADD_POKEMON_IN_BAG } from '../store/storeConstants'
import * as constants from '../components/componentConst'
import PokemonCard from '../components/PokemonCard'
import SnackBar from '../components/SnackBar.vue'

export default {
    components: { PokemonCard, SnackBar },
    data: () => ({
        pokemonPage: POKEMON_PAGE,
        pokemonName: '',
        snackbar: false,
        text: '',
    }),
    props: {
        pokemons: Array,
    },
    methods: {
        addPokemon: function (pokemon) {
            this.$store.commit(ADD_POKEMON_IN_BAG, pokemon)
            this.pokemonName = pokemon.name
            this.snackbar = true
            this.text = constants.CONFIRM_MESSAGE
        },
        disabledSnack: function () {
            this.snackbar = false
        },
        disabledButton: function (pokemon) {
            if (
                this.$store.state.bag.length == 5 ||
                this.$store.state.bag.find((p) => p.name === pokemon.name)
            )
                return true
        },
    },
}
</script>

<style></style>
