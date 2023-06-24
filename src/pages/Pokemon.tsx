import { useParams } from "react-router-dom"


export default function Pokemon() {
    const {name} = useParams()

  return (
    <div>{name}</div>
  )
}

