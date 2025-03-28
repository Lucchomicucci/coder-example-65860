import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopComponentContext = ({ children }) => {

  const [cart, setCart] = useState([])

  const handleAddToCart = (item) => {
    setCart([...cart, item ])
  }

  const handleEmptyCart = () => {
    setCart([])
  }

  const handleCount = () => {
    let contador = 0
    cart.forEach((item) => {
      contador += item.quantity
    })
    return contador
  }

  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }

  return(
    <ShopContext.Provider value={{ handleAddToCart, handleCount, handleRemove, cart, handleEmptyCart }}>
      {children}
    </ShopContext.Provider>
  )
}