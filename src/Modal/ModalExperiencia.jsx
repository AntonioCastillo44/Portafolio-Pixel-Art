import React from 'react'
import Portal from './Portal'
import '../styles/SecycledStyles.css'


const ModalExperiencia = ({children, activeExperiencia, toggleModalExperiencia}) => {
    return (
     <Portal> { activeExperiencia && ( 
        <div className='wrapper'> 
            <div className='window' onClick={toggleModalExperiencia}>
                {children}
            </div>
            <div className='window__close' onClick={toggleModalExperiencia}>  </div>
        </div>
      )}
    </Portal> 
    )
  }


export default ModalExperiencia