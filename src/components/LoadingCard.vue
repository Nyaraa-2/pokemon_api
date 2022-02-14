<template>
    <v-card class="mx-auto ma-5" max-width="344" outlined m-2>
        <v-sheet
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="pa-3"
        >
            <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
            ></v-skeleton-loader>
        </v-sheet>
    </v-card>
</template>

<script>
export default {
    name: 'LoadingCard',
    data() {
        return {}
    },
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
}
</script>

<style></style>
