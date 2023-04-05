import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  function handleClickAcerca() {
    const navbar = document.querySelector('#acerca'); 
    navbar.scrollIntoView({ behavior: 'smooth' }); 
  }

  function handleClickExperiencia() {
    const navbar = document.querySelector('#experiencia'); 
    navbar.scrollIntoView({ behavior: 'smooth' }); 
  }

  function handleClickPortafolio() {
    const navbar = document.querySelector('#portafolio'); 
    navbar.scrollIntoView({ behavior: 'smooth' }); 
  }

  function handleClickContacto() {
    const navbar = document.querySelector('#contacto'); 
    navbar.scrollIntoView({ behavior: 'smooth' }); 
  }

  return (
    <div className='div__nav'>
      <button class="nav__button" href="#" onClick={handleClickAcerca}>Acerca de mí</button>
      <button class="nav__button" href="#" onClick={handleClickExperiencia}>Experiencia</button>
      <button class="nav__button" href="#" onClick={handleClickPortafolio}>Portafolio</button>
      <button class="nav__button" href="#" onClick={handleClickContacto}>Contacto</button>
    </div>
  )
}

export default Nav