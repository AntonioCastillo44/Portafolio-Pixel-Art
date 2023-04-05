import React from 'react'
import '../styles/SecycledStyles.css'

const ModalContacto = ({handleCloseContacto, isOpenContacto, children }) => {
  return (
    <div className={`modal ${isOpenContacto ? 'is-open' : ''}`}>
      <div className="modal-overlay" onClick={handleCloseContacto} />
      <div className="modal-content">
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
  }

export default ModalContacto