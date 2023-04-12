import React from 'react'
import utel from '../img/utel.png'
import '../styles/AcercaDe.css'
import '../styles/SecycledStyles.css'

const AcercaDe = ({ handleCloseAcercaDe}) => {
  return (
    <section className='container__acerca flex__container'>

      <div className='container__acerca-contet main_container'>
        <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={handleCloseAcercaDe}>X</h1>
        </div>
        <h1 className='acerca__title'>Acerca de mí</h1>
        <p className='acerca__content'> 
          Hola soy Antonio un desarrollador full stack motivado, con habilidades de liderazgo y una ética de trabajo fuerte. Disfruto trabajando tanto de manera independiente como en equipo y siempre estoy buscando nuevos desafíos para aprender y crecer.  <br/>
          <br/>
          Soy ingeniero egresado de UTEL destacado por mi dedicación y perseverancia, lo que le permite enfrentar desafíos complejos y superarlos con éxito. Mi formación académica me brinda una sólida base en lógica y análisis, lo que me permite abordar los proyectos con una mentalidad estratégica enfocada en resultados.
        </p>
        <img className='acerca__logo logo_center' src={utel} alt="" />
      </div>

    </section>
  )
}

export default AcercaDe




