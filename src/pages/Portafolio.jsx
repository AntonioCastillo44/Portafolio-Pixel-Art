import React from 'react'
import pokedex from '../img/1-removebg-preview.png'
import crud from '../img/2-removebg-preview.png'
import rick from '../img/3-removebg-preview.png'
import weather from '../img/4-removebg-preview.png'
import {useState } from 'react'
import '../styles/Portafolio.css'
import '../styles/Nav.css'

const Portafolio = ({toggleModalPortafolio}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1)
  }

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1)
  }
  return (
    <section className="container__portafolio"> 

      <div className="container_portafolio-contet main_container"> 
      <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={toggleModalPortafolio}>X</h1>
        </div>
        <h1 className="container_portafolio-title"> Portafolio </h1>

      <div className="portafolio__container slider"> 
      
      <div className={activeIndex === 0 ? "slide active" : "slide"}>
        <div className='portafolio__contet' alt="Imagen 1">
        <div className="portafolio__info">
            <h1 className="portafolio__title"> Pokédex Primer version</h1>
            <h2 className="portafolio__subtitle"> con React router y Redux </h2>
            <p className="portafolio__content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis dolorum velit, aliquam doloribus quibusdam ullam laborum minus qui id est ducimus, aliquid dolor ipsum nobis nam quia quidem. Eaque.</p>
            <button className="portafolio__button nav__button"> Página </button>
        </div>
        
        <div className="portafolio__cellPhone"> 
            <img className="contacto__logo" src={pokedex} alt="" />
        </div>
        </div>
      </div>

      <div className={activeIndex === 1 ? "slide active" : "slide"}>
        <div className='portafolio__contet' alt="Imagen 2">
        <div className="portafolio__info">
            <h1 className="portafolio__title"> Pokédex Primer version</h1>
            <h2 className="portafolio__subtitle"> con React router y Redux </h2>
            <p className="portafolio__content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis dolorum velit, aliquam doloribus quibusdam ullam laborum minus qui id est ducimus, aliquid dolor ipsum nobis nam quia quidem. Eaque.</p>
            <button className="portafolio__button nav__button"> Página </button>
        </div>
        
        <div className="portafolio__cellPhone"> 
            <img className="contacto__logo" src={crud} alt="" />
        </div>
        </div>
      </div>

      <div className={activeIndex === 2 ? "slide active" : "slide"}>
        <div className='portafolio__contet' alt="Imagen 3">
        <div className="portafolio__info">
            <h1 className="portafolio__title"> Pokédex Primer version</h1>
            <h2 className="portafolio__subtitle"> con React router y Redux </h2>
            <p className="portafolio__content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis dolorum velit, aliquam doloribus quibusdam ullam laborum minus qui id est ducimus, aliquid dolor ipsum nobis nam quia quidem. Eaque.</p>
            <button className="portafolio__button nav__button"> Página </button>
        </div>
        
        <div className="portafolio__cellPhone"> 
            <img className="contacto__logo" src={rick} alt="" />
        </div>
        </div>
      </div>

      <div className={activeIndex === 3 ? "slide active" : "slide"}></div>
        <div className='portafolio__contet' alt="Imagen 4">
        <div className="portafolio__info">
            <h1 className="portafolio__title"> Pokédex Primer version</h1>
            <h2 className="portafolio__subtitle"> con React router y Redux </h2>
            <p className="portafolio__content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis dolorum velit, aliquam doloribus quibusdam ullam laborum minus qui id est ducimus, aliquid dolor ipsum nobis nam quia quidem. Eaque.</p>
            <button className="portafolio__button nav__button"> Página </button>
        </div>
        
        <div className="portafolio__cellPhone"> 
            <img className="contacto__logo" src={weather} alt="" />
        </div>
        </div>
      </div>
      
       <div className="buttons">
        <div>
         <i class='bx bx-chevron-left close_icon' onClick={handlePrevClick}></i>
        </div>
        
        <div>
          <i class='bx bx-chevron-right close_icon' onClick={handleNextClick}></i>
        </div>
      </div>
      
      </div>
    </section>

  )
}

export default Portafolio