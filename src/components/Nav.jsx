import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className='div__nav'>
      <button class="nav__button" href="#">Acerca de mí</button>
      <button class="nav__button" href="#">Experiencia</button>
      <button class="nav__button" href="#">Portafolio</button>
      <button class="nav__button" href="#">Contacto</button>
    </div>
  )
}

export default Nav