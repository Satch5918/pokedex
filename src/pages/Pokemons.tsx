import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from 'react'


export default function Pokemons() {

    const [query, setQuery] = useState('')
  return (
    <>
   <Header query={query} setQuery={setQuery}/>
    <main>
        <h1>POKEMONS</h1>
    </main>
    <Footer/>
 
    </>
  )
}
