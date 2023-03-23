import React from 'react'
import Portal from './Portal'
import '../styles/SecycledStyles.css'


const ModalContacto = ({children, activeContacto, toggleModalContacto}) => {
    return (
     <Portal> { activeContacto && ( 
        <div className='wrapper'> 
            <div className='window' onClick={toggleModalContacto}>
                {children}
            </div>
            <div className='window__close' onClick={toggleModalContacto}>  </div>
        </div>
      )}
    </Portal> 
    )
  }

export default ModalContacto