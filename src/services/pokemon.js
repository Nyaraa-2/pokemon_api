import axios from 'axios'

/**
 * Récupère les 20 premiers pokémon de l'api
 */
const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
})
export async function gottaCatchEmAll() {
    try {
        const { data } = await apiPokemon('?limit=50/')
        //const { data } = await apiPokemon('/')
        return data
    } catch (e) {
        throw new Error('La requête a échoué')
    }
}

/**
 * Récupère les informations du pokemon par son nom
 * @param {Nom du pokémon} name
 * @returns {Détails du pokémon}
 */
export async function getPokemonByName(name) {
    try {
        const { data } = await apiPokemon(`/${name}`)
        return data
    } catch (e) {
        throw new Error('La requête a échoué')
    }
}

/**
 * Récupère les informations du pokemon par son id
 * @param {Id du pokémon} id
 * @returns {Détails du pokémon}
 */
export async function getPokemonById(id) {
    try {
        const { data } = await apiPokemon(`/${id}`)
        return data
    } catch (e) {
        throw new Error('La requête a échoué')
    }
}
