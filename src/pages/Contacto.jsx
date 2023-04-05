 import React from 'react'
 import whatsApp from '../img/WhatsApp.png'
 import linkedIn from '../img/LinkedIn.png'
 import gmail from '../img/Gmail.png'
 import '../styles/Contacto.css'
 import '../styles/SecycledStyles.css'

 const Contacto = ({handleCloseContacto}) => {
   return (
    <section className="container__contacto flex__container"> 
  
    <div className="container_contacto-contet main_container">
    <div className='container_close-icon'> 
      <h1 className='close_icon' onClick={handleCloseContacto}>X</h1>
    </div>
     <h1 className='container_contacto-title'>Contacto</h1>

     <div className="contacto__content">
     <div className="contacto_logo">
      <a href="https://api.whatsapp.com/send/?phone=525610561318&text=tu+Hola+Antonio%2C+me+interesa+tu+perfil&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <img className="contacto__img logo_center" src={whatsApp} alt=""/>
      </a>
        <h1 className="contacto__title"> WhatsApp </h1>
      </div>

      <div className="contacto_logo">
       <a href="https://www.linkedin.com/in/jos%C3%A9-antonio-castillo-hern%C3%A1ndez-959693149/" target="_blank" rel="noopener noreferrer">
         <img className="contacto__img logo_center" src={linkedIn} alt="" />
       </a>
        <h1 className="contacto__title"> LinkedIn </h1>
      </div>

      <div className="contacto_logo">
        <a href="mailto:jossecass@gmail.com?Subject=Hola+Antonio%2C+me+interesa+tu+perfil" target="_blank" rel="noopener noreferrer">
          <img className="contacto__img logo_center" src={gmail} alt="" href=""/>
        </a>
        <h1 className="contacto__title"> Gmail </h1>
      </div>

     </div>
    </div>

    </section>
   )
 }

 export default Contacto

