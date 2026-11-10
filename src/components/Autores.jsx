import { autores } from '../data/evento'
import CartaoAutor from './CartaoAutor'

export default function Autores() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {autores.map((autor) => (
        <CartaoAutor 
          key={autor.nome} 
          nome={autor.nome} 
          profissao={autor.profissao} 
        />
      ))}
    </div>
  )
}