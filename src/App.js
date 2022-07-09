import './App.css'

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

export default function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenido a CryptoCat 😎 ."}/>
    </div>
  )
}
