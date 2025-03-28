import CartWidget from "../cartWidget/CartWidget"
import { Box } from "@mui/material"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
      <Link to='/'>
        <h2>Mi tienda</h2>
      </Link>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <NavLink to='/category/superior'>
          Superior
        </NavLink>
        <NavLink to='/category/inferior'>
          Inferior
        </NavLink>
      <CartWidget />
      </Box>
    </Box>
  )
}

export default Navbar