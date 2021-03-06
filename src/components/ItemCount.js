import { useState } from 'react'

import './ItemCount.css'

import products from '../products';

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(initial);

const incrementar = () => {
    setCount(count + 1);
};
const decrementar = () => {
    setCount((valAnt) => (valAnt > 1 ? count - 1 : count))
};

const [open, setOpen] = useState(true)

const [open2, setOpen2] = useState(false)

  return (
  <div className='S2-background'> 
  {open2 && <p className='txt-4 animate__animated animate__pulse'>Cryptos agregas al carrito</p>}
  {open && 

      <div className='S2-content'>

      <div className='S2-C-B1'><p className='S2-txt-1'></p></div>
      <div className='S2-C-B2'>
        <button className='S2-C-B2B1' onClick={decrementar}><p className='txt-2'>-</p></button>
        <div className='S2-C-B2B2'>{count}</div>
        <button className='S2-C-B2B3' onClick={incrementar}><p className='txt-2'>+</p></button>
      </div>
      <button className='S2-C-B3'
      onClick={() => {
          if (count <= stock) {
              onAdd(count);
          }
          else {
              alert("No hay stock")
          }
          setOpen(false)
          setOpen2(true)
      }} >
          <p className='txt-3'>COMPRAR</p>
  </button>

      </div>}

    </div>
  )
}

export default ItemCount