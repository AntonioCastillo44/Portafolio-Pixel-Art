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

  const [isOpenContacto, setIsOpenContacto] = useState(false);
  const handleOpenContacto = () => {
    setIsOpenContacto(true);
  };
  const handleCloseContacto = () => {
    setIsOpenContacto(false);
  };

  const [isOpenPortafolio, setIsOpenPortafolio] = useState(false);
  const handleOpenPortafolio = () => {
    setIsOpenPortafolio(true);
  };
  const handleClosePortafolio = () => {
    setIsOpenPortafolio(false);
  };

  const [isOpenExperiencia, setIsOpenExperiencia] = useState(false);
  const handleOpenExperiencia = () => {
    setIsOpenExperiencia(true);
  };
  const handleCloseExperiencia = () => {
    setIsOpenExperiencia(false);
  };

  const [isOpenAcercaDe, setIsOpenAcercaDe] = useState(false);
  const handleOpenAcercaDe = () => {
    setIsOpenAcercaDe(true);
  };
  const handleCloseAcercaDe = () => {
    setIsOpenAcercaDe(false);
  };

  return (
    <div>
      <Header />
      <Nav />
      <Apartment  handleOpenContacto={handleOpenContacto} handleOpenPortafolio={handleOpenPortafolio} handleOpenExperiencia={handleOpenExperiencia} handleOpenAcercaDe={handleOpenAcercaDe}/>
      <Floor />

      <ModalAcercaDe isOpenAcercaDe={isOpenAcercaDe}  handleCloseAcercaDe={handleCloseAcercaDe}>
        <AcercaDe  handleCloseAcercaDe={handleCloseAcercaDe}/> 
      </ModalAcercaDe>  

      <ModalExperiencia isOpenExperiencia={isOpenExperiencia} handleCloseExperiencia={handleCloseExperiencia}>
        <Experiencia handleCloseExperiencia={handleCloseExperiencia}/> 
      </ModalExperiencia>  
 
      <ModalPortafolio isOpenPortafolio={isOpenPortafolio} handleClosePortafolio={handleClosePortafolio}>
        <Portafolio handleClosePortafolio={handleClosePortafolio}/>
      </ModalPortafolio> 

      <ModalContacto isOpenContacto={isOpenContacto} handleCloseContacto={handleCloseContacto}>
        <Contacto handleCloseContacto={handleCloseContacto} />
      </ModalContacto>
    </div>
  )
}

export default App
