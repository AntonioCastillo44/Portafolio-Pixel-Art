import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Apartment from './components/Apartment'
import Floor from './components/Floor'
import AcercaDe from './pages/AcercaDe'
import Contacto from './pages/Contacto'
import Portafolio from './pages/Portafolio'
import Experiencia from './pages/Experiencia'
import { useState } from 'react'
import ModalAcercaDe from './Modal/ModalAcercaDe'
import ModalExperiencia from './Modal/ModalExperiencia'
import ModalPortafolio from './Modal/ModalPortafolio'
import ModalContacto from './Modal/ModalContacto'

function App() {
  const[activeAcercaDe, setActiveAcercaDe] = useState(false)
  const toggleModalAcercaDe = () => {
    setActiveAcercaDe(!activeAcercaDe)
  }

  const[activeExperiencia, setActiveModalExperiencia] = useState(false)
  const toggleModalExperiencia = () => {
    setActiveModalExperiencia(!activeExperiencia)
  }

  const[activePortafolio, setActiveModalPortafolio] = useState(false)
  const toggleModalPortafolio = () => {
    setActiveModalPortafolio(!activePortafolio)
  }

  const[activeContacto, setActiveModalContacto] = useState(false)
  const toggleModalContacto = () => {
    setActiveModalContacto(!activeContacto)
  }
  toggleModalContacto
  return (
    <div>
      <Header />
      <Nav />
      <Apartment  toggleModalAcercaDe={ toggleModalAcercaDe} toggleModalExperiencia={toggleModalExperiencia} toggleModalPortafolio={toggleModalPortafolio} toggleModalContacto={toggleModalContacto}/>
      <Floor />

      <ModalAcercaDe activeAcercaDe={activeAcercaDe}  toggleModalAcercaDe={ toggleModalAcercaDe}>
        <AcercaDe  toggleModalAcercaDe={toggleModalAcercaDe}/> 
      </ModalAcercaDe>  

      <ModalExperiencia activeExperiencia={activeExperiencia}  toggleModalExperiencia={ toggleModalExperiencia}>
        <Experiencia toggleModalExperiencia={toggleModalExperiencia}/> 
      </ModalExperiencia>  
      
      <ModalPortafolio activePortafolio={activePortafolio} toggleModalPortafolio={toggleModalPortafolio}>
        <Portafolio toggleModalPortafolio={toggleModalPortafolio}/>
      </ModalPortafolio> 

      <ModalContacto activeContacto={activeContacto} toggleModalContacto={toggleModalContacto}>
        <Contacto toggleModalContacto={toggleModalContacto}/>
      </ModalContacto> 
      
             
    </div>
  )
}

export default App
