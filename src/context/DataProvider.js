import React from 'react'
import { useEffect, useState } from 'react'
export const DataContext = React.createContext()
const DataProvider = (props) => {
  /*Coexion*/
  const [listName, setListName] = useState([])
  try {
    useEffect(() => {
      jsonData()
    }, [])
  } catch (e) {
    alert('Mensaje del Servidor: No se pudo establecer la conexión')
  }

  const jsonData = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=2000'
    const response = await fetch(url)
    const data = await response.json()
    setListName(data.results)
  }

  return (
    <DataContext.Provider
      value={{
        listName,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
