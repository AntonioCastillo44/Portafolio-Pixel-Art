import React from 'react'
import Portal from './Portal'
import '../styles/SecycledStyles.css'


const ModalPortafolio = ({children, activePortafolio, toggleModalPortafolio}) => {
    return (
     <Portal> { activePortafolio && ( 
        <div className='wrapper'> 
            <div className='window' onClick={toggleModalPortafolio}>
                {children}
            </div>
            <div className='window__close' onClick={toggleModalPortafolio}>  </div>
        </div>
      )}
    </Portal> 
    )
  }

export default ModalPortafolio