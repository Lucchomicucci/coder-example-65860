import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const CartWidget = () => {
  const { handleCount } = useContext(ShopContext)
  const navigate = useNavigate()
  return (
      <Badge badgeContent={handleCount()} onClick={() => navigate('/cart')} color="success" >
        <AddShoppingCartIcon color="action" />
      </Badge>
  )
}

export default CartWidget
