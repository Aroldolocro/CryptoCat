import './ItemListContainer.css'

import ItemList from './ItemList'

import products1 from '../products1.json'
import products2 from '../products2.json'
import products3 from '../products3.json'

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(document.getElementById("demo2").innerHTML)
  }, 2000)
})

promesa.then((parametro) =>{
  document.getElementById("demo").innerHTML = parametro
})

const ItemListContainer = ({ greeting }) => {
  return (
    <section className='S1-background'>
      <div className='S1-content'>
        <div></div>
        <div className='S1-C-B0'></div>
        <div className='S1-C-B1'>
          <div className='S1-C-B1B1'>
            { greeting }
          </div>
        </div>

      <div className='S1-C-B2' id='demo'>
        <p className='S1-txt-1'>Cargando...</p>
      </div>
      <div className='S1-C-B2v2' id='demo2'>
        <ItemList items={products1}/>
        <ItemList items={products2}/>
        <ItemList items={products3}/>
      </div>

      </div>
    </section>
  )
}

export default ItemListContainer

{/* <ItemList items={products1}/> */}