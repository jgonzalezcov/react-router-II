import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import gema from '../assets/img/gema.gif'
import fire from '../assets/img/type.gif'
import CarouselText from '../components/CarouselText'
const Characters = () => {
  const [character, setCharacter] = useState(null)
  const [specie, setSpecie] = useState(null)
  const { name } = useParams()

  useEffect(() => {
    if (name) {
      jsonData()
    }
  }, [name])

  const jsonData = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const response = await fetch(url)
      const data = await response.json()
      setCharacter(data)
    } catch (e) {
      alert('Mensaje del Servidor: No se pudo establecer la conexión')
    }
  }
  try {
    useEffect(() => {
      if (character) {
        jsonSp()
      }
    }, [character])
  } catch (e) {
    alert('Mensaje del Servidor: No se pudo establecer la conexión')
  }

  const jsonSp = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${character.id}`
    const response = await fetch(url)
    const data = await response.json()

    setSpecie(
      data.flavor_text_entries
        .filter((y) => y.language.name === 'es')
        .map((e) => e)
    )
  }

  return (
    <div className="container-page">
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
                <h3 className="text-inf">
                  HP: {character.stats[0].base_stat}{' '}
                </h3>
              </div>

              <div className="info">
                <img className="img-gema" src={gema} alt="" />
                <h3 className="text-inf">
                  Ataque: {character.stats[1].base_stat}{' '}
                </h3>
              </div>
              <div className="info">
                <img className="img-gema" src={gema} alt="" />
                <h3 className="text-inf">
                  Defensa: {character.stats[2].base_stat}{' '}
                </h3>
              </div>
              <div className="info">
                <img className="img-gema" src={gema} alt="" />
                <h3 className="text-inf">
                  Especial Atack: {character.stats[3].base_stat}{' '}
                </h3>
              </div>
              <div className="info">
                <img className="img-gema" src={gema} alt="" />
                <h3 className="text-inf">
                  Especial Defensa: {character.stats[4].base_stat}{' '}
                </h3>
              </div>
              <div className="info">
                <img className="img-gema" src={gema} alt="" />
                <h3 className="text-inf">
                  Velocidad: {character.stats[5].base_stat}{' '}
                </h3>
              </div>
              {character
                ? character.types.map((z) => (
                    <div className="info" key={z.type.name}>
                      <img className="img-type" src={fire} alt="" />
                      <h3 className="text-inf">Tipo: {z.type.name} </h3>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      <CarouselText specie={specie} character={character} />
    </div>
  )
}

export default Characters
