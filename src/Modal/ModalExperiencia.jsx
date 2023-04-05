import React from 'react'
import '../styles/SecycledStyles.css'

const ModalExperiencia = ({handleCloseExperiencia, isOpenExperiencia, children}) => {
  return (
    <div className={`modal ${isOpenExperiencia ? 'is-open' : ''}`}>
      <div className="modal-overlay" onClick={handleCloseExperiencia} />
       <div className="modal-content">
        <div className="modal-body">{children}</div>
       </div>
    </div>
    )
  }

export default ModalExperiencia