import { useState } from 'react'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import './index.css'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className="container mx-auto bg-gray-200 h-screen">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes} />
        <ListadoPacientes
          pacientes={pacientes} />
      </div>
    </div>
  )
}

export default App
