import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import gema from '../assets/img/gema.gif'
const Characters = () => {
  const [character, setCharacter] = useState(null)
  const { name } = useParams()

  try {
    useEffect(() => {
      jsonData()
    }, [name])
  } catch (e) {
    alert('Mensaje del Servidor: No se pudo establecer la conexión')
  }

  const jsonData = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    setCharacter(data)
  }

  return (
    <div className="character-view">
      {character ? (
        <div className="character-container">
          <div className="circle-img-poke">
            <div className="container-img-poke">
              <img
                className="img-card"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${character.id}.png`}
                alt=""
              />
            </div>
            <h3 className="name">{character.name.toUpperCase()} </h3>
          </div>
          <div className="container-info">
            <div className="info">
              <img className="img-gema" src={gema} alt="" />
              <h3 className="text-info">HP: {character.stats[0].base_stat} </h3>
            </div>
            <div className="info">
              <img className="img-gema" src={gema} alt="" />
              <h3 className="text-info">
                Defensa: {character.stats[2].base_stat}{' '}
              </h3>
            </div>
            <div className="info">
              <img className="img-gema" src={gema} alt="" />
              <h3 className="text-info">
                Especial Atack: {character.stats[3].base_stat}{' '}
              </h3>
            </div>
            <div className="info">
              <img className="img-gema" src={gema} alt="" />
              <h3 className="text-info">
                Especial Defensa: {character.stats[4].base_stat}{' '}
              </h3>
            </div>
            <div className="info">
              <img className="img-gema" src={gema} alt="" />
              <h3 className="text-info">
                Velocidad: {character.stats[5].base_stat}{' '}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Characters
