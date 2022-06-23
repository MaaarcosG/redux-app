import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlices";

export const getPokemons = ( page = 0) => {
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemon() );

        /* TODO: Realizar peticion http */
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page*10 }`);
        // const data = await resp.json()
        // console.log(data);

        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page*10 }`)
        /* data-pokemons */

        dispatch( setPokemons({pokemons: data.results, page: page+1}) );

    };
}