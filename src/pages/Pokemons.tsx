import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from './pokemons.module.css'
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";


export default function Pokemons() {

    const [isloading, setIsLoading] = useState(false)
    const [query, setQuery] = useState('')
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
      
      const fetchAllPokemons = async () => {
        setIsLoading(true);
        await waitFor(2000)
        const allPokemons = await fetchPokemons();
        setPokemons(allPokemons);
       setIsLoading(false);
      };
      fetchAllPokemons();
    }, []);

    if (isloading || pokemons === null) {
      return <LoadingScreen />;
    }

    const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase())
  });
  
  return (
    <>
   <Header query={query} setQuery={setQuery}/>
    <main>
      <nav className={style.nav}>
      {filteredPokemons?.slice(0, 151).map((pokemon) => (
            <Link
            className={style.listItem}
            key={pokemon.id}
             to={`/pokemons/${pokemon.name.toLowerCase()}`}>
              <img 
              className={style.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={style.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        
      </nav>
    </main>
    <Footer/>
 
    </>
  )
}
