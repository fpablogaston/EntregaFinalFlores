import React, {useState} from 'react'


export const ItemDetail = ({ id, name, img, category, description, price, stock, detail}) => {

    const [contador, setContador] = useState(0)
    const [valorDelInput, setValorDelInput] = useState(0)
    
      const sumar = () => {
      setContador(contador + 1)
      }
    
      const restar = () => {
        setContador(contador - 1)
        }
    
      const restart = () => {
        setContador(0)
      }
    
      const actualizarValorDelInput = (valor) => {
        setValorDelInput(parseInt(valor))
      }
    
      const actualizarContador = () => {
        setContador(valorDelInput)
      }
    

      return ( 
            <div> 
                
                 <header className="App-header">
                   <p> contador: {contador}</p>
                      <div className='contador-container'> 
                         <button className= 'btn' class="App-link" onClick={restar} > - </button>
                         <button className= 'btn' class="App-link" onClick={sumar}> + </button>
                         <button className= 'btn' class="App-link" onClick={restart} > restart </button>
                      </div>
                <input type='number' onChange={(event) => actualizarValorDelInput(event.target.value)}/>
                <button onClick={actualizarContador}> Actualizar contador </button>
                </header>
            </div>
        )
    } 

export default ItemDetail

