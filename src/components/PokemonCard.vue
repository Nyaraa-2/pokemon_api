<template>
    <div v-if="loadingCard">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                    {{ pokemonDetails.name | toUpperCase(pokemonDetails.name) }}
                </v-list-item-title>
                <ul v-for="type in types" :key="type">
                    <li>{{ type | toUpperCase(type) }}</li>
                </ul>
            </v-list-item-content>
            <v-list-item-avatar tile size="150">
                <v-img :src="imageCard">
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                                indeterminate
                                color="red"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-list-item-avatar>
        </v-list-item>
        <v-divider class="mx-4"></v-divider>
        <v-spacer></v-spacer>
    </div>
    <div v-else>
        <loading-card />
    </div>
</template>

<script>
import * as constantes from './componentConst'
import { getPokemonByName } from '../services/pokemon'
import formatNamePokemon from '../mixins/format'
import LoadingCard from './LoadingCard'
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object,
    },
    mixins: [formatNamePokemon],
    components: {
        LoadingCard,
    },
    data() {
        return {
            error: '',
            imageCard: '',
            pokemonDetails: [],
            types: [],
            bag: [],
            loadingCard: false,
            sheet: false,
            label: constantes.ADD_IN_BAG,
        }
    },

    async mounted() {
        try {
            this.pokemonDetails = await getPokemonByName(this.pokemon.name)
            this.pokemonDetails.types.forEach((element) => {
                this.types.push(element.type.name)
            })
            this.imageCard = this.pokemonDetails.sprites.front_shiny
            this.loadingCard = true
        } catch (error) {
            this.error = error
        }
    },
}
</script>

<style></style>
