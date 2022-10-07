import React from 'react'
import imgPicachu from '../assets/img/Mime.webp'
const Home = () => {
  return (
    <div className="container-home">
      <div className="container-home-img">
        <div className="text-container-home">
          <h3 className="sign-language">hola maestro pokemon</h3>
          <h3 className="text-home">Hola Maestro Pokémon</h3>
        </div>
        <img className="img-home" src={imgPicachu} alt="" />
      </div>
    </div>
  )
}

export default Home
