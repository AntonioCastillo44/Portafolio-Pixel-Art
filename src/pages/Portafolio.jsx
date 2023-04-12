import React from "react";
import pokedex from "../img/1-removebg-preview.png";
import crud from "../img/2-removebg-preview.png";
import rick from "../img/3-removebg-preview.png";
import weather from "../img/4-removebg-preview.png";
import background from "../img/5-removebg-preview.png"
import { useState } from "react";
import "../styles/Portafolio.css";
import "../styles/Nav.css";

const Portafolio = ({ handleClosePortafolio }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? 3 : activeIndex - 1)
  }

  const handleNextClick = () => {
    setActiveIndex(activeIndex === 3 ? 0 : activeIndex + 1)
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

          <div className={activeIndex === 0 ? "slide active" : "slide"}>
            <div className="portafolio__contet" alt="Imagen 1">
              <div className="portafolio__info">
                <h1 className="portafolio__title">Pokédex</h1>
                <h2 className="portafolio__subtitle">
                  React router y Redux
                </h2>
                <p className="portafolio__content">
                  Una de mis creaciones más recientes fue una pokedek en la que traté de mantenerme fiel al diseño clásico de las cartas Pokémon. Para garantizar la seguridad de la aplicación, implementé una ruta protegida utilizando React Router. Además, para mejorar la gestión del estado de la aplicación, decidí practicar la implementación de Redux.
                </p>

                <a href="https://pokedex-jach.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="portafolio__button nav__button">
                    Página
                  </button>
                </a>

              </div>

              <div className="portafolio__cellPhone">
                <img className="contacto__logo" src={pokedex} alt="" />
              </div>
            </div>
          </div>

          <div className={activeIndex === 1 ? "slide active" : "slide"}>
            <div className="portafolio__contet" alt="Imagen 2">
              <div className="portafolio__info">
                <h1 className="portafolio__title">Administrador de usuarios</h1>
                <h2 className="portafolio-subtitle-crud">
                  {"CRUD’s y métodos HTTP"}
                </h2>
                <p className="portafolio__content">
                Desarrollé una aplicación completa utilizando CRUD (Create, Read, Update, Delete) y métodos HTTP. Utilicé React y Hook Form para crear formularios de entrada de datos controlados y manejar la validación de los mismos. Además, implementé renderizado condicional para mostrar diferentes vistas según las acciones que el usuario quisiera realizar, lo que resultó en una interfaz amigable e intuitiva para el usuario.
                </p>
              
                <a href="https://users-management-jach.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <button className="portafolio__button nav__button">
                    Página
                  </button>
                </a>
              
              </div>

              <div className="portafolio__cellPhone">
                <img className="contacto__logo" src={crud} alt="" />
              </div>
            </div>
          </div>

          <div className={activeIndex === 2 ? "slide active" : "slide"}>
            <div className="portafolio__contet" alt="Imagen 3">
              <div className="portafolio__info">
                <h1 className="portafolio__title"> Wiki de Rick and Morty</h1>
                <h2 className="portafolio-subtitle-wiki">
                Listas y Keys, inputs controlados, renderizado condicional
                </h2>
                <p className="portafolio__content">
                  Utilicé Listas y Keys para mostrar de manera ordenada las dimenciones, tambien implementé inputs controlados para permitir al 
                  usuario buscar dimensión. Con el renderizado condicional, mostré información de cada una de las dimensión solo cuando el usuario buscaba o actualizaba la pagina.
                </p>
               
                <button className="portafolio__button nav__button">
                  Página
                </button>
               
              </div>

              <div className="portafolio__cellPhone">
                <img className="contacto__logo" src={rick} alt="" />
              </div>

            </div>
          </div>

          <div className={activeIndex === 3 ? "slide active" : "slide"}>
               <div className="portafolio__contet" alt="Imagen 4">

            <div className="portafolio__info">
              <h1 className="portafolio__title"> App del clima </h1>
              <h2 className="portafolio-subtitle-clima">
              Componentes, Props, useState y useEffect 
              </h2>
              <p className="portafolio__content">
              Este fue mi primer proyecto con el consumo {'API´s,'} tuve la oportunidad de aprender y utilizar de manera efectiva los hooks de React como el useEffect y useState. Además, para asegurarme de comprender correctamente la documentación, me esforcé por programar un diseño creativo y atractivo que destacara entre los proyectos de mis compañeros.
              </p>

              <button className="portafolio__button nav__button">
                Página
              </button>
            
            </div>

            <div className="portafolio__cellPhone">
              <img className="contacto__logo" src={weather} alt="" />
            </div>

          </div>
          </div>

          <div className="portafolio__contet">

            <div className="portafolio__info">
              <h1 className="portafolio__title"></h1>
              <h2 className="portafolio__subtitle">
              </h2>
              <p className="portafolio__content"> </p>
            </div>

            <div className="portafolio__cellPhone">
              <img className="contacto__logo" src={background} alt="" />
            </div>

          </div>

        </div>
      

        <div className="buttons">
          <div>
            <i
              class="bx bx-chevron-left close_icon"
              onClick={handlePrevClick}
            ></i>
          </div>

          <div>
            <i
              class="bx bx-chevron-right close_icon"
              onClick={handleNextClick}
            ></i>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Portafolio;
