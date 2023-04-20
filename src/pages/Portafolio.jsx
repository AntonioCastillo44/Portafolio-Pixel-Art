import React from "react";
import pokedex from "../img/1-removebg-preview.png";
import crud from "../img/2-removebg-preview.png";
import rick from "../img/3-removebg-preview.png";
import weather from "../img/4-removebg-preview.png";
import { useState } from "react";
import "../styles/Portafolio.css";
import "../styles/Nav.css";

const Portafolio = ({ handleClosePortafolio }) => {

  const projects = [
    {
      id: 1,
      title: 'Pokédex',
      subtitle: 'React router y Redux',
      description: 'Una de mis creaciones más recientes fue una pokedek en la que traté de mantenerme fiel al diseño clásico de las cartas Pokémon. Para garantizar la seguridad de la aplicación, implementé una ruta protegida utilizando React Router. Además, para mejorar la gestión del estado de la aplicación, decidí practicar la implementación de Redux.',
      image: pokedex,
      link: 'https://pokedex-jach.netlify.app/'
    },
    {
      id: 2,
      title: 'Administrador de usuarios',
      subtitle: 'CRUD’s y métodos HTTP',
      description: 'Desarrollé una aplicación completa utilizando CRUD (Create, Read, Update, Delete) y métodos HTTP. Utilicé React y Hook Form para crear formularios de entrada de datos controlados y manejar la validación de los mismos. Además, implementé renderizado condicional para mostrar diferentes vistas según las acciones que el usuario quisiera realizar, lo que resultó en una interfaz amigable e intuitiva para el usuario.',
      image: crud,
      link: 'https://users-management-jach.netlify.app/'
    },
    {
      id: 3,
      title: 'Wiki de Rick and Morty',
      subtitle: 'Listas y Keys, inputs controlados, renderizado condicional',
      description: 'Utilicé Listas y Keys para mostrar de manera ordenada las dimenciones, tambien implementé inputs controlados para permitir al usuario buscar dimensión. Con el renderizado condicional, mostré información de cada una de las dimensión solo cuando el usuario buscaba o actualizaba la pagina.',
      image: rick,
      link: 'https://rick-and-morty-search-jach.netlify.app/'
    },
    {
      id: 4,
      title: 'App del clima',
      subtitle: 'Componentes, Props, useState y useEffect',
      description: 'Este fue mi primer proyecto con el consumo API´s, tuve la oportunidad de aprender y utilizar de manera efectiva los hooks de React como el useEffect y useState. Además, para asegurarme de comprender correctamente la documentación, me esforcé por programar un diseño creativo y atractivo que destacara entre los proyectos de mis compañeros.',
      image: weather,
      link: 'https://weather-consultant-jach.netlify.app/'
    }
  ]

  const [currentProject, setCurrentProject] = useState(0)
  
    const handleNextProject = () => {
      if (currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1);
      } else {
        setCurrentProject(0);
      }
    }
  
    const handlePrevProject = () => {
      if (currentProject > 0) {
        setCurrentProject(currentProject - 1);
      } else {
        setCurrentProject(projects.length - 1);
      }
    }
  
  return (
    <section className="container__portafolio">
      <div className="container_portafolio-contet main_container">
        <div className="container_close-icon">
          <h1 className="close_icon" onClick={handleClosePortafolio}>
            X
          </h1>
        </div>

        <h1 className="container_portafolio-title">  ¡Bienvenido a mi portafolio web! </h1>

        <div className="portafolio__container slider">

          <div>
            <div className="portafolio__contet" alt="Imagen 1">
              <div className="portafolio__info">
                <h1 className="portafolio__title">{projects[currentProject].name}</h1>
                <h2 className="portafolio__subtitle">
                  {projects[currentProject].subtitle}
                </h2>
                <p className="portafolio__content">
                  {projects[currentProject].description}
                </p>

                <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer">
                  <button className="portafolio__button nav__button">
                    Página
                  </button>
                </a>

              </div>

              <div className="portafolio__cellPhone">
                <img className="contacto__logo"   src={projects[currentProject].image} alt="Ejemplo del portafolio" />
              </div>
            </div>
          </div>

        </div>
      
        <div className="buttons">
          <div>
            <i
              class="bx bx-chevron-left close_icon"
              onClick={handlePrevProject}
            ></i>
          </div>

          <div>
            <i
              class="bx bx-chevron-right close_icon"
              onClick={handleNextProject}
            ></i>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portafolio;
