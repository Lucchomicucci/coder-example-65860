/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/item/${product.id}`)
  }

  return (
    <div onClick={handleClick} style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", padding: 10, margin: 10 }}>
      <img style={{ width: 120, height: 120}} src={product.image} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}

export default Item