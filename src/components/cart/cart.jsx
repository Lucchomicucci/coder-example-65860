import React, { useState, useContext } from 'react'
import { addDoc, collection, doc, updateDoc, writeBatch } from '@firebase/firestore'
import { db } from '../../firebase/client'
import { ShopContext } from '../../context/ShopContext'
const Cart = () => {
  const [ buyer, setBuyer ] = useState({name: '', phone: '', email: ''})
  const [ orderNumber, setOrderNumber ] = useState()
  const { cart, handleEmptyCart } = useContext(ShopContext)
  const createOrder = () => {
    const order = {
      buyer,
      items: cart.map((item) => ( { id: item.id, title: item.title, quantity: item.quantity, price: item.price } )),
      total: 10000
    }
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order).then(({id}) => {
      setOrderNumber(id)
      handleEmptyCart()
    })
  }

  const onChangeName = (name) => {
    setBuyer({...buyer, name})
  }

  const onChangePhone = (phone) => {
    setBuyer({...buyer, phone})
  }

  const onChangeEmail = (email) => {
    setBuyer({...buyer, email})
  }

  const updateProduct = (id, stock) => {
    const productToUpdate = doc(db, "products", id)
    updateDoc(productToUpdate, { stock, title: "Remera actualizada", price: 9999 }) // Segundo parametro: Los campos que quiero updatear
  }

  // Distintas Operaciones en una sola func
  const updateMultipleDocs = async () => {
    try {
      const batch = writeBatch(db);

      // Setea nuevos campos a un doc. OJO (Sobreescribe lo que ya esta)
      const orderRef = doc(db, "orders", "IfdlpJ6jp6897V3wZJmF");
      batch.set(orderRef, {stockOferta: 20});

      // Actualiza uno o varios campos de un doc.
      const productRef = doc(db, "products", "uYfqWZ1BtyCGjNs3B54l");
      batch.update(productRef, {"stock": 99});

      // Borra un doc
      const deleteProdRef = doc(db, "products", "dSPGco0xb3BOyOCSLhAz");
      batch.delete(deleteProdRef);

      // Commit del batch
      await batch.commit();
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
    {orderNumber ? (
    <>
    <p>Finalizaste tu compra con exito. Tu numero de orden es: #{orderNumber}</p>
    </>
    ) : (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', paddingX: 48 }}>
      <div>Cart</div>
      <div style={{ width: '100%' }}>
        {cart.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Total ${item.price * item.quantity}</p>
            <button>Eliminar</button>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24, width: 500, justifyContent: 'center' }}>
      <h4>Formulario de compra</h4>
      <input type="text" placeholder="Nombre" onChange={(event) => onChangeName(event.target.value)}/>
      <input type="number" placeholder="Telefono" onChange={(event) => onChangePhone(event.target.value)}/>
      <input type="text" placeholder="Email" onChange={(event) => onChangeEmail(event.target.value)}/>
      <button onClick={() => createOrder()}>Finalizar compra</button>
      </div>
    </div>
    )}
    </>
  )
}

export default Cart