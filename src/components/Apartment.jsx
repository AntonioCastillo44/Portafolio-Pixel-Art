import React from 'react'
import me from '../img/me.png'
import acerca from '../img/acerca.png'
import experiencia from '../img/experiencia.png'
import portafolio from '../img/portafolio.png'
import contacto from '../img/contacto.png'
import '../styles/Apartment.css'

const Apartment = ({handleOpenContacto, handleOpenPortafolio, handleOpenExperiencia, handleOpenAcercaDe}) => {

  return (
    <body className='body__apartment'>

        <div className='div__cropped'>
        </div>

        <section>
                <div className='div__ceiling'>
                </div>

                <div className='div__apartment div__acerca' id="acerca">
                    <img className='div__acerca-font wobble-horizontal ' src={acerca} alt="" onClick={handleOpenAcercaDe}/>
                    <img className='div__acerca-img' src={me} alt=""/>
                </div>

                <div className='div__apartment div__experiencia' id="experiencia">
                    <img className='div__experiencia-font wobble-horizontal' src={experiencia} alt=""  onClick={handleOpenExperiencia}/>
                    <img className='div__experiencia-img' src={me} alt="" />
                </div>

                <div className='div__apartment div__portafolio' id="portafolio">
                    <img className='div__portafolio-img' src={me} alt="" />
                    <img className='div__portafolio-font wobble-horizontal' src={portafolio} alt="" onClick={handleOpenPortafolio}/>
                </div>

                <div className='div__apartment div__contacto' id="contacto">
                    <img className='div__contacto-font wobble-horizontal' src={contacto} alt=""  onClick={handleOpenContacto}/>
                    <img className='div__contacto-img' src={me} alt=""/>
                </div>
        </section>

    </body>
    
  )
}

export default Apartment