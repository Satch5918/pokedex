// https://pokeapi.co/api/v2/pokemon/bulbasaur

import { PokemonDetails } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`);
  if (!response.ok) {
    throw new Error(`Error fetching pokemon ${name}`);
  }
  const resul = await response.json();
  const pokemon ={
    name: resul.name,
    id: resul.id,
    imgSrc: resul.sprites.front_default,
    hp: resul.stats[0].base_stat,
    attack: resul.stats[1].base_stat,
    defense: resul.stats[2].base_stat,
  }
  return pokemon;
} 

