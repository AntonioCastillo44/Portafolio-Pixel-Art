 import React from 'react'
 import whatsApp from '../img/WhatsApp.png'
 import linkedIn from '../img/LinkedIn.png'
 import gmail from '../img/Gmail.png'
 import '../styles/Contacto.css'
 import '../styles/SecycledStyles.css'

 const Contacto = ({toggleModalContacto}) => {
   return (
    <section className="container__contacto flex__container"> 
  
    <div className="container_contacto-contet main_container">
    <div className='container_close-icon'> 
      <h1 className='close_icon' onClick={toggleModalContacto}>X</h1>
    </div>
     <h1 className='container_contacto-title'>Contacto</h1>

     <div className="contacto__content">
     <div className="contacto_logo">
        <img className="contacto__img logo_center" src={whatsApp} alt="" />
        <h1 className="contacto__title"> WhatsApp </h1>
      </div>

      <div className="contacto_logo">
        <img className="contacto__img logo_center" src={linkedIn} alt="" />
        <h1 className="contacto__title"> LinkedIn </h1>
      </div>

      <div className="contacto_logo">
        <img className="contacto__img logo_center" src={gmail} alt="" />
        <h1 className="contacto__title"> Gmail </h1>
      </div>

     </div>
    </div>

    </section>
   )
 }

 export default Contacto

