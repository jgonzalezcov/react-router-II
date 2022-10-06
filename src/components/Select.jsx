import React from 'react'
import { useState } from 'react'
import { DataContext } from '../context/DataProvider'
import { useNavigate } from 'react-router-dom'

const Select = () => {
  const navigate = useNavigate()

  const [character, setCharacter] = useState('')
  const [activeItems, setActiveItems] = useState(false)
  const [activebtn, setActivebtn] = useState(false)

  const sendForm = (e) => {
    e.preventDefault()
    navigate(`/pokemones/${character}`)
    console.log(character)
    setActivebtn(false)
    setCharacter('')
  }
  const deactivate = (nameSelect) => {
    setCharacter(nameSelect)
    setActiveItems(false)
    setActivebtn(true)
  }
  const change = (value) => {
    setCharacter(value)
    if (activebtn === true) {
      setActivebtn(false)
    }
  }
  function compare_name(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1
    }
    return 0
  }

  const { listName } = React.useContext(DataContext)

  return (
    <div className="container-select">
      {console.log(listName)}
      <div className="container-form">
        <h3 className="title-input">Encuentra tu POKÉMON</h3>

        <form onSubmit={sendForm}>
          <div className="container-input">
            <input
              autoComplete="off"
              className="input-character"
              placeholder="Ingresa tu Pokémon"
              type="text"
              value={character}
              name="nombreTarea"
              onChange={(e) => {
                change(e.target.value)
              }}
              onClick={() => setActiveItems(true)}
            />
            {character !== '' && activeItems ? (
              <ul className="autocomplete-list">
                {listName && activeItems
                  ? listName
                      .filter((y) =>
                        y.name.toUpperCase().includes(character.toUpperCase())
                      )
                      .sort(compare_name)
                      .map((pokemon) => (
                        <li
                          key={pokemon.name}
                          value={pokemon.name}
                          onClick={() => deactivate(pokemon.name)}
                        >
                          {pokemon.name}
                        </li>
                      ))
                  : ''}
              </ul>
            ) : (
              ''
            )}
          </div>
          {activebtn ? (
            <button className="btn-character">Buscar Pokémon </button>
          ) : (
            <button className="btn-character-off">
              Esperando seleccion...{' '}
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Select
