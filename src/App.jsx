import './App.css'
import Navbar from './components/navbar/Navbar'
import ItemListContainer from './components/itemListCotainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Listener from './components/event';
import Prevent from './components/prevent';
import Propagation from './components/propagation';
import InputVocales from './components/inputVocales';
import { ShopComponentContext } from './context/ShopContext';
import Contador from './components/memo/memo'
import { useState } from 'react'
import Cart from './components/cart/cart';
function App() {
  return (
    <ShopComponentContext>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </ShopComponentContext>
  )
}

export default App