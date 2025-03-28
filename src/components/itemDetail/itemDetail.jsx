/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(1)
  const { handleAddToCart } = useContext(ShopContext)
  return (
    <div>
      <h2>{product?.title}</h2>
      <p>${product?.price}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
      <button onClick={() => handleAddToCart( {...product, quantity: contador} )}>Agregar al carrito</button>
  </div>
  )
}

export default ItemDetail