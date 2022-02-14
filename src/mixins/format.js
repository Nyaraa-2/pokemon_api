export default {
    filters: {
        toUpperCase(pokeName) {
            return (pokeName + '').charAt(0).toUpperCase() + pokeName.substr(1)
        },
    },
}
