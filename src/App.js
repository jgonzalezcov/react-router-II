import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataProvider from './context/DataProvider'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Characters from './views/Characters'
import Select from './components/Select'

const App = () => {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones/:name" element={<Characters />} />
            <Route path="/pokemones/" element={<Select />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App
