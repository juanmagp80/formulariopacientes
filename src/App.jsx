import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import Header from './components/Header'
import './index.css'

function App() {
  

  return (
    <div className="container mx-auto bg-gray-200 h-screen">
      <Header />
      <div className="mt-12 md:flex">
      <Formulario />
     <ListadoPacientes />
     </div>
    </div>
  )
}

export default App
