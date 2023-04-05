import React from 'react'
import '../styles/SecycledStyles.css'


const ModalAcercaDe = ({handleCloseAcercaDe, isOpenAcercaDe, children}) => {
  return (
    <div className={`modal ${isOpenAcercaDe ? 'is-open' : ''}`}>
       <div className="modal-overlay" onClick={handleCloseAcercaDe} />
        <div className="modal-content">
         <div className="modal-body">{children}</div>
        </div>
    </div>
    )
  }


export default ModalAcercaDe