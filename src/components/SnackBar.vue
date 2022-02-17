<template>
    <div class="text-center">
        <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ pokemonName | toUpperCase(pokemonName) }} {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="indigo lighten-2"
                    text
                    v-bind="attrs"
                    elevation="24"
                    @click="disabledSnack"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import formatNamePokemon from '../mixins/format'
export default {
    name: 'SnackBar',
    mixins: [formatNamePokemon],
    props: {
        text: String,
        pokemonName: String,
        snackbar: Boolean,
    },
    data: function () {
        return {
            timeout: 2000,
        }
    },
    methods: {
        disabledSnack: function () {
            this.$emit('disabled-snack')
        },
    },
}
</script>

<style></style>
