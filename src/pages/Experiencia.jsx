import React from 'react'
import utel from '../img/utel.png'
import concord from '../img/concord.png'
import academlo from '../img/academlo.png'
import '../styles/Experiencia.css'
import '../styles/SecycledStyles.css'

const Experiencia = ({handleCloseExperiencia}) => {
  return (
    <section className='container__experiencia flex__container'>
    
        <div className='container__experiencia-contet main_container'>
        <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={handleCloseExperiencia}>X</h1>
        </div>
          <h1 className="container_portafolio-title">
             Experiencia
          </h1>
        <div className='container__experiencia-info'>

        <div className="experiencia__info">
            <h1 className="experiencia__title"> Representante de generación - Academlo </h1>
              <p className="experiencia__contet">
              Como representante de generación, mi trabajo se enfoca en brindar apoyo a los estudiantes que tienen dificultades en su proceso de aprendizaje, ofreciendo orientación y asesoramiento para aclarar dudas y temas tratados en el aula. Además, fomento la entrega oportuna de tareas y motivación para evitar la deserción estudiantil, guiando a los estudiantes en la toma de decisiones académicas y proporcionando las herramientas necesarias para que alcancen sus objetivos educativos.
              </p>
             <img src={academlo} alt="" className="experiencia__logo" />
        </div>

        <div className="experiencia__info">
            <h1 className="experiencia__title"> Gestor de taller soporte tecnico - Colchas concord</h1>
             <p className="experiencia__contet">
             Como responsable del taller de soporte técnico a nivel nacional, mi trabajo consiste en garantizar el correcto funcionamiento de los equipos utilizados por las sucursales a través de la coordinación de tareas de reparación, mantenimiento y configuración de hardware y software, incluyendo computadoras, impresoras, terminales bancarias y telefonía IP. Además, administro y superviso el inventario de equipos para asegurar que las necesidades de las sucursales se cubran en todo momento, lo que ha contribuido significativamente a la eficiencia y productividad de la empresa.
             </p>
             <img src={concord} alt="" className="experiencia__logo" />
        </div>

        <div className="experiencia__info">
            <h1 className="experiencia__title"> Asesor educativo - Universidad UTEL</h1>
            <p className="experiencia__contet">
                Como asesor educativo mi función es interactuar con prospectos interesados en programas de licenciatura e institución educativa, brindándoles información detallada y precisa, y resolviendo cualquier duda o pregunta que puedan tener. Además, mi papel incluye motivar e incentivar a los prospectos para inscribirse en una licenciatura, estableciendo un seguimiento constante para facilitar el proceso de inscripción y asegurando que se sientan confiados en su decisión de elegir nuestra institución.
             </p>
             <img src={utel} alt="" className="experiencia__logo" />
        </div>

        </div>
          <div className='experiencia__button'>
            <a href="https://drive.google.com/file/d/1JjGHAgsNqHE4bxOyMd5xQlsUo-IpMb-x/view?usp=share_link" target="_blank" rel="noopener noreferrer">
              <button className="nav__button">
                Descargar CV
              </button>
            </a>
          </div>
        </div>
        
    </section>
  )
}

export default Experiencia