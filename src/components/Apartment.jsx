import React from 'react'
import me from '../img/me.png'
import acerca from '../img/acerca.png'
import experiencia from '../img/experiencia.png'
import portafolio from '../img/portafolio.png'
import contacto from '../img/contacto.png'
import '../styles/Apartment.css'

const Apartment = ({toggleModalAcercaDe, toggleModalExperiencia, toggleModalPortafolio, toggleModalContacto}) => {
  return (
    <body className='body__apartment'>

        <div className='div__cropped'>
        </div>

        <section>
                <div className='div__ceiling'>
                </div>

                <div className='div__apartment div__acerca'>
                    <img className='div__acerca-font wobble-horizontal ' src={acerca} alt="" onClick={toggleModalAcercaDe}/>
                    <img className='div__acerca-img' src={me} alt=""/>
                </div>

                <div className='div__apartment div__experiencia'>
                    <img className='div__experiencia-font wobble-horizontal' src={experiencia} alt=""  onClick={toggleModalExperiencia}/>
                    <img className='div__experiencia-img' src={me} alt="" />
                </div>

                <div className='div__apartment div__portafolio'>
                    <img className='div__portafolio-img' src={me} alt="" />
                    <img className='div__portafolio-font wobble-horizontal' src={portafolio} alt="" onClick={toggleModalPortafolio}/>
                </div>

                <div className='div__apartment div__contacto'>
                    <img className='div__contacto-font wobble-horizontal' src={contacto} alt=""  onClick={toggleModalContacto}/>
                    <img className='div__contacto-img' src={me} alt="" />
                </div>
        </section>

    </body>
    
  )
}

export default Apartment