import React from 'react'
import '../styles/Portafolio.css'

const Portafolio = ({toggleModalPortafolio}) => {
  return (
    <section className="container__portafolio"> 

      <div className="container_portafolio-contet main_container"> 
      <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={toggleModalPortafolio}>X</h1>
        </div>
        <h1 className="container_portafolio-title"> Portafolio </h1>

      <div className='portafolio__contet'>
        <div className="portafolio__info">
            <h1 className="portafolio__title"> Pokédex Primer version</h1>
            <h2 className="portafolio__subtitle"> con React router y Redux </h2>
            <p className="portafolio__content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem perferendis dolorum velit, aliquam doloribus quibusdam ullam laborum minus qui id est ducimus, aliquid dolor ipsum nobis nam quia quidem. Eaque.</p>
            <button className="portafolio__button"> Página </button>
        </div>
        
        <div className="portafolio__cellPhone"> 
            <img className="contacto__logo" src="./public/img/Portafolio_Pixel_Art-removebg-preview.png" alt="" />
        </div>
      </div>

      </div>

    </section>

  )
}

export default Portafolio