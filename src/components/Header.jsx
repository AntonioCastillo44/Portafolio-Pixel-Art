import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'> 
      <section className='section__header'>
       <div className='div__header'>
          <img className='div__img-name' src="./public/img/name.gif" alt="" />
          <img className='div__img-me' src="./public/img/me.png" alt="" />
       </div>
      </section>
    </header>
  )
}

export default Header