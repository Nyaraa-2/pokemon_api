<template>
    <v-app-bar app color="indigo lighten-3">
        <div class="d-flex align-center">
            <router-link :to="{ name: homepage }" class="text-decoration-none">
                <v-img
                    alt="pokeapi Logo"
                    class="shrink mr-2"
                    contain
                    src="../assets/pokeapi.png"
                    transition="scale-transition"
                    width="100"
                />
            </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn text
            ><router-link :to="{ name: homepage }" class="text-decoration-none">
                <span class="white--text">{{ $t('navbar.home') }}</span>
            </router-link>
        </v-btn>

        <v-btn text>
            <router-link :to="{ name: bagPage }" class="text-decoration-none">
                <span class="white--text">{{ $t('navbar.bag') }}</span>
            </router-link>
        </v-btn>
        <v-rating
            :value="pokemonInBag"
            color="yellow"
            full-icon="mdi-pokeball"
            empty-icon="mdi-cercle"
            half-increments
            readonly
            size="14"
        ></v-rating>
        <v-btn text @click="changeTheme">
            <v-icon class="white--text">mdi-theme-light-dark</v-icon>
        </v-btn>
        <v-btn text @click="toggleLang">
            <span class="white--text">{{ $t('navbar.language') }}</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
import * as routesNames from '../router/routesNames'
export default {
    name: 'Navigation',
    data() {
        return {
            theme: false,
            bagPage: routesNames.BAG_PAGE,
            homepage: routesNames.HOME_PAGE,
        }
    },
    methods: {
        changeTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
        toggleLang() {
            if (this.$i18n.locale === 'fr') {
                this.$i18n.locale = 'en'
            } else {
                this.$i18n.locale = 'fr'
            }
        },
    },
    computed: {
        pokemonInBag() {
            return this.$store.state.bag.length
        },
    },
}
</script>

<style></style>
