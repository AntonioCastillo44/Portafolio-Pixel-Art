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
          Hola soy Antonio un desarrollador full stack apasionado y altamente motivado, con una fuerte ética de trabajo y habilidades de liderazgo probadas. Mi experiencia me ha enseñado la importancia de la perseverancia y la dedicación para lograr resultados exitosos. Me siento cómodo trabajando tanto de manera independiente como en equipo, lo que me permite asumir responsabilidades y liderar proyectos con eficacia. Siempre estoy buscando nuevos desafíos y oportunidades para aprender y crecer. <br/>
          <br/>
          Soy un ingeniero egresado de UTEL, conocido por mi dedicación y perseverancia, lo que me permite enfrentar desafíos complejos y superarlos con éxito. Mi formación académica en ingeniería me ha brindado una sólida base en lógica y análisis, lo que me permite abordar los proyectos con una mentalidad estratégica y enfocada en los resultados. 
        </p>
        <img className='acerca__logo logo_center' src={utel} alt="" />
      </div>

    </section>
  )
}

export default AcercaDe