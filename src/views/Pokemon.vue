<template>
    <div>
        <div v-for="data in pokemon" :key="data.id">
            <p>{{ data }}</p>
        </div>
    </div>
</template>

<script>
import { getPokemonByName } from '../services/pokemon'
export default {
    name: 'Pokemon',
    data: () => ({
        pokemon: {},
        error: '',
    }),
    async mounted() {
        try {
            this.pokemon = await getPokemonByName(this.$route.params.name)
            console.log(this.pokemon)
        } catch (error) {
            this.error = error
        }
    },
}
</script>

<style></style>
