import style from './header.module.css'

type HeaderProps = {
    query: string;
    setQuery: (query: string) => void;
  };

export default function Header({ query, setQuery }: HeaderProps) {
    
  return (
    <header className={style.header}>
        <input 
        className={style.input} 
        placeholder="Search a Pokemon" 
        value={query}
        type="text" 
        onChange={(e) => setQuery(e.target.value)}
        name="" 
        id="" />
    </header>
  )
}
