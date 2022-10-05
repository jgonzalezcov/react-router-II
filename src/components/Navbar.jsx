import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import homeIco from '../assets/img/casa.png'
import characterIco from '../assets/img/ico-pikachu.png'
const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="Logo Pokemon" />
      <div className="container-navbar">
        <NavLink className="btn-link" end to="/">
          <img className="ico-navlink" src={homeIco} alt="" />
          <h4 className="text-navlink">Home</h4>
        </NavLink>
        <NavLink className="btn-link" end to="/pokemones">
          <img className="ico-navlink" src={characterIco} alt="" />
          <h4 className="text-navlink">Pokemones</h4>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
