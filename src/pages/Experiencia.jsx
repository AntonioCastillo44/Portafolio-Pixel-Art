import React from 'react'
import '../styles/Experiencia.css'
import '../styles/SecycledStyles.css'

const Experiencia = ({toggleModalExperiencia}) => {
  return (
    <section className='container__experiencia flex__container'>
    
        <div className='container__experiencia-contet main_container'>
        <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={toggleModalExperiencia}>X</h1>
        </div>
          <h1 className="container_portafolio-title">
             Experiencia
          </h1>
        <div className='container__experiencia-info'>
        <div className="experiencia__info">
            <h1 className="experiencia__title"> Asesor educativo - Universidad UTEL</h1>
            <p className="experiencia__contet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos quae repellat, fugit consequatur exercitationem beatae doloribus adipisci veniam. Maiores odit beatae et commodi atque delectus quos autem vero repellendus!
             </p>
             <img src="./public/img/utel.png" alt="" className="experiencia__logo" />
        </div>

        <div className="experiencia__info">
            <h1 className="experiencia__title"> Gestor de taller soporte tecnico - Colchas concord</h1>
            <p className="experiencia__contet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos quae repellat, fugit consequatur exercitationem beatae doloribus adipisci veniam. Maiores odit beatae et commodi atque delectus quos autem vero repellendus!
             </p>
             <img src="./public/img/concord.png" alt="" className="experiencia__logo" />
        </div>

        <div className="experiencia__info">
            <h1 className="experiencia__title"> Representante de generación - Academlo </h1>
            <p className="experiencia__contet">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos quae repellat, fugit consequatur exercitationem beatae doloribus adipisci veniam. Maiores odit beatae et commodi atque delectus quos autem vero repellendus!
             </p>
             <img src="./public/img/academlo.png" alt="" className="experiencia__logo" />
        </div>
        </div>

        </div>
        
    </section>
  )
}

export default Experiencia