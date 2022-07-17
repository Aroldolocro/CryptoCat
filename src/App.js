import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFoundpage from './components/NotFoundpage'
import CategoryContainer from './components/CategoryContainer'

export default function App() {
  return (
    // <div className='App'>
    //   <Navbar/>
    //     {/* <ItemListContainer greeting={"Bienvenido a CryptoCat 😎 ."}/> */}
    //     <ItemDetailContainer/>
    // </div>
        <BrowserRouter>

        <Navbar/>
          
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"CryptoCat 😎 ."}/>}/>
            <Route path="*" element={<NotFoundpage/>}/>
            <Route path="/category/:id" element={<CategoryContainer/>}/>
            <Route path="item/:id" element={<ItemDetailContainer/>}/>
            {/* <Route path="*" element={<Notfoundpage/>}/>
            <Route path="producto/:productId" element={<ProdcutPage/>}/> */}
          </Routes>
          
        </BrowserRouter>
  )
}
