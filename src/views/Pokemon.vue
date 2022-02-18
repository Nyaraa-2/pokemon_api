<template>
    <div>
        <v-btn @click="goBack" color="indigo lighten-3" class="mt-3 ml-5">
            <span class="white--text"
                ><v-icon>mdi-arrow-left</v-icon> {{ $t('navbar.goBack') }}</span
            >
        </v-btn>
        <v-container>
            <v-card max-width="90%">
                <v-row align="center" class="mx-10">
                    <v-card-title class="red--text">{{
                        pokemon.name | toUpperCase(pokemon.name)
                    }}</v-card-title>
                    <v-spacer />
                    <div v-for="type in pokemon.types" :key="type.slot">
                        <v-col>
                            <img
                                :src="
                                    require(`../assets/types/${type.type.name}.png`)
                                "
                                alt="type_pokemon"
                            />
                        </v-col>
                        <v-spacer />
                    </div>
                </v-row>
                <v-row align="center">
                    <v-col align="center" class="mx-0">
                        <div>
                            <v-img
                                max-width="320px"
                                height="300px"
                                :src="image"
                                alt="pokemon image"
                            />
                        </div>
                    </v-col>
                    <v-col>
                        <v-row align="center" class="mx-0">
                            <v-col>
                                <div>
                                    <div class="text-h5 mb-1">
                                        {{ $t('pokemon.weight') }}
                                    </div>
                                    <v-card-text>{{
                                        pokemon.weight
                                    }}</v-card-text>

                                    <div class="text-h5 mb-1">
                                        {{ $t('pokemon.height') }}:
                                    </div>
                                    <v-card-text>{{
                                        pokemon.height
                                    }}</v-card-text>
                                    <div class="text-h5 mb-1">
                                        {{ $t('pokemon.base experience') }} :
                                    </div>
                                    <v-card-text>{{
                                        pokemon.base_experience
                                    }}</v-card-text>
                                </div>
                            </v-col>
                            <v-col>
                                <div>
                                    <div class="text-h5 mb-1">
                                        {{ $t('pokemon.types') }} :
                                    </div>
                                    <div
                                        v-for="type in pokemon.types"
                                        :key="type.slot"
                                    >
                                        <v-card-text>{{
                                            type.type.name
                                        }}</v-card-text>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-h5 mb-1">
                                        {{ $t('pokemon.abilities') }} :
                                    </div>
                                    <div
                                        v-for="ability in pokemon.abilities"
                                        :key="ability.slot"
                                    >
                                        <v-card-text>{{
                                            ability.ability.name
                                        }}</v-card-text>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { getPokemonByName } from '../services/pokemon'
import formatNamePokemon from '../mixins/format'

export default {
    name: 'Pokemon',
    data: () => ({
        pokemon: {},
        error: '',
        image: '',
        versions: {},
    }),
    mixins: [formatNamePokemon],
    async mounted() {
        try {
            this.pokemon = await getPokemonByName(this.$route.params.name)
            this.image =
                this.pokemon.sprites.versions['generation-v'][
                    'black-white'
                ].animated.front_shiny
            this.versions = this.pokemon.sprites.versions
            console.log(this.versions)
        } catch (error) {
            this.error = error
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
    },
}
</script>

<style>
h3,
p {
    text-align: center;
}
</style>
