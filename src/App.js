import './App.css'

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
        {/* <ItemListContainer greeting={"Bienvenido a CryptoCat 😎 ."}/> */}
        <ItemDetailContainer/>
    </div>
  )
}
