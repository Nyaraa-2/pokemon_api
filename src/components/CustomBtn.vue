<template>
    <div>
        <div>
            <v-btn
                :disabled="disabledBtn"
                rounded
                outlined
                color="red"
                @click="addPoke"
            >
                {{ label }}
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomBtn',
    props: {
        label: String,
        pokemon: Object,
    },
    methods: {
        addPoke: function () {
            this.$emit('addPoke')
        },
    },
    computed: {
        disabledBtn() {
            let pokemonFindInBag = false
            this.$store.state.bag.forEach((element) => {
                if (this.pokemon.name === element.name) {
                    pokemonFindInBag = true
                }
            })
            if (this.$store.state.bag.length == 5) {
                return true
            }
            return pokemonFindInBag
        },
    },
}
</script>

<style></style>
