/* eslint-disable react-hooks/exhaustive-deps */
import { useFetch } from '../../customHooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import {getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList'
const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  // const productsRef = collection(db, "products")

  const getProducts = async () => {
    let productsRef = collection(db, "products")

    if (categoryId) {
      productsRef = query(
        collection(db, "products"),
        where("categoryId", "==", categoryId),
      )
    }

    const data = await getDocs(productsRef)
    const dataFiltrada = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
    console.log(dataFiltrada)
    setProducts(dataFiltrada)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [categoryId])

  if ( loading ) {
    return <div>Loading</div>
  }

  return (
    <>
      {products.length > 0 ? <ItemList productos={products}/> : <div>No hay productos</div>}
    </>
  )
}

export default ItemListContainer