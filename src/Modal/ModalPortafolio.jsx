import React from 'react'

import '../styles/SecycledStyles.css'


const ModalPortafolio = ({handleClosePortafolio, isOpenPortafolio, children}) => {
    return (
      <div className={`modal ${isOpenPortafolio ? 'is-open' : ''}`}>
        <div className="modal-overlay" onClick={handleClosePortafolio} />
         <div className="modal-content">
          <div className="modal-body">{children}</div>
         </div>
      </div>
    )
  }

export default ModalPortafolio