import './App.css'

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={"Empecemos con USDT 😎 ."}/>
      <ItemCount stock={5} initial={1} onAdd={(n) => alert("agregados: "+n+" productos.") }/>
    </div>
  )
}
