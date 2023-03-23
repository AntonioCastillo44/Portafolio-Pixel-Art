import React from 'react'
import Portal from './Portal'
import '../styles/SecycledStyles.css'


const ModalAcercaDe = ({children, activeAcercaDe, toggleModalAcercaDe}) => {
    return (
     <Portal> { activeAcercaDe && ( 
        <div className='wrapper'> 
            <div className='window' onClick={toggleModalAcercaDe}>
                {children}
            </div>
            <div className='window__close' onClick={toggleModalAcercaDe}>  </div>
        </div>
      )}
    </Portal> 
    )
  }


export default ModalAcercaDe