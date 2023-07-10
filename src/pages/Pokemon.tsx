import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import style from './pokemon.module.css'
import pokeball from '../assets/pokeball.png'
import Footer from "../components/Footer"
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

export default function Pokemon() {
    const [isloading, setIsloading] = useState(false)
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const navigate = useNavigate()
    const { name } = useParams()

    useEffect(() => {
      async function getPokemon() {
      setIsloading(true);
      await waitFor(1000);
    const fetchedPokemon = await fetchPokemon(name as string)
    setPokemon(fetchedPokemon)
    setIsloading(false)
  }    
    getPokemon()
  },[name])
    
  if (isloading || pokemon === null) {
    return <LoadingScreen />;
  }

  return (
    <>
    <button className={style.pokeballButton} onClick={() => navigate(-1)}>
      <img className={style.pokeballImg} src={pokeball} alt="" />Go Back
    </button>
    <div className={style.pokemonContainer} >
      <main className={style.pokemonInfo}>
        <div className={style.pokemonTitle}>{name?.toUpperCase()}</div>
        <div>Nr. {pokemon?.id}</div>
        <div>
          <img className={style.pokemonInfoImg} src={pokemon?.imgSrc} alt="" />
        </div>
        <div>HP: {pokemon?.hp}</div>
        <div>Attack: {pokemon?.attack}</div>
        <div>Defense: {pokemon?.defense}</div>
      </main>
    </div>
    <Footer/>

    </>
  )
}

