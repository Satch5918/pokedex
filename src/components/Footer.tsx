import { Link } from "react-router-dom"
import style from './footer.module.css'
import pokemonPic from '../assets/pikachu.png'
import locationPic from '../assets/pointer.png'
import itemPic from '../assets/pokeball.png'

export default function Footer() {
  return (
    <footer className={style.footer}>
        <Link className={style.footerLink} to="/pokemons">
        <img className={style.footerIcon} src={pokemonPic} alt="" />
        Pokemons    
        </Link>
        <Link onClick={(e) => e.preventDefault()}
         className={style.footerLink} to="/items">
        <img className={style.footerIcon} src={itemPic} alt="" />
        Items   
        </Link>
        <Link onClick={(e) => e.preventDefault()}
         className={style.footerLink} to="location">
        <img className={style.footerIcon} src={locationPic} alt="" />
        Map    
        </Link>
    </footer>
  )
}
