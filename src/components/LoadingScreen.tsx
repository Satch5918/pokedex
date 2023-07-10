import Pokedex from '../assets/pokedex.png'
import style from './loadingScreen.module.css'

export default function LoadingScreen() {
  return (
    <div className={style.loadingScreen}>
        <img className={style.loadingScreenIcon} src={Pokedex} alt="" />
    </div>
  )
}
