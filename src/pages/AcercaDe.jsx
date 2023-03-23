import React from 'react'
import '../styles/AcercaDe.css'
import '../styles/SecycledStyles.css'

const AcercaDe = ({ toggleModalAcercaDe}) => {
  return (
    <section className='container__acerca flex__container'>

      <div className='container__acerca-contet main_container'>
        <div className='container_close-icon'> 
          <h1 className='close_icon' onClick={toggleModalAcercaDe}>X</h1>
        </div>
        <h1 className='acerca__title' >Acerca de mi</h1>
        <p className='acerca__content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, assumenda! Deserunt dolorem vero totam eligendi sint, illum culpa ratione cumque odio est debitis atque rerum? Quibusdam incidunt cupiditate molestiae eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam pariatur magnam explicabo voluptates facilis ducimus suscipit vel repudiandae eaque nobis laborum fugit quibusdam harum, veritatis id iste molestiae recusandae autem.</p>
        <img className='acerca__logo logo_center' src="./public/img/utel.png" alt="" />
      </div>

    </section>
  )
}

export default AcercaDe