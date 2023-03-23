import React from 'react'
import name from '../img/name.gif'
import me from '../img/me.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'> 
      <section className='section__header'>
       <div className='div__header'>
          <img className='div__img-name' src={name} alt="" />
          <img className='div__img-me' src={me} alt="" />
       </div>
      </section>
    </header>
  )
}

export default Header