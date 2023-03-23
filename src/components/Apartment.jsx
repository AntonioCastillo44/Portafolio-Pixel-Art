import React from 'react'
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
                    <img className='div__acerca-font wobble-horizontal ' src="./public/img/acerca.png" alt="" onClick={toggleModalAcercaDe}/>
                    <img className='div__acerca-img' src="./public/img/me.png" alt=""/>
                </div>

                <div className='div__apartment div__experiencia'>
                    <img className='div__experiencia-font wobble-horizontal' src="./public/img/experiencia.png" alt=""  onClick={toggleModalExperiencia}/>
                    <img className='div__experiencia-img' src="./public/img/me.png" alt="" />
                </div>

                <div className='div__apartment div__portafolio'>
                    <img className='div__portafolio-img' src="./public/img/me.png" alt="" />
                    <img className='div__portafolio-font wobble-horizontal' src="./public/img/portafolio.png" alt="" onClick={toggleModalPortafolio}/>
                </div>

                <div className='div__apartment div__contacto'>
                    <img className='div__contacto-font wobble-horizontal' src="./public/img/contacto.png" alt=""  onClick={toggleModalContacto}/>
                    <img className='div__contacto-img' src="./public/img/me.png" alt="" />
                </div>
        </section>


    </body>
    
  )
}

export default Apartment