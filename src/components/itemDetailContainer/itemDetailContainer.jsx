import { useFetch } from '../../customHooks/useFetch'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { useState, useEffect } from 'react';
import ItemDetail from '../itemDetail/ItemDetail'
const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [ product, setProduct] = useState()
  const [ loading, setLoading ] = useState(true)
  const productRef = doc(db, 'products', productId)

  const getProduct = () => {
    getDoc(productRef).then((snapshot => {
      if(snapshot.exists()){
        setProduct({ id: snapshot.id, ...snapshot.data() })
      }
    }))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    getProduct()
  }, [])

  if ( loading ) {
    return <div>Loading</div>
  }

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer