/* eslint-disable react/prop-types */
import Item from '../item/Item'

const ItemList = ({ productos }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {productos?.map((product) => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList