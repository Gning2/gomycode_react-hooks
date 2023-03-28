import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import  '../style/Style.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='d-flex container justify-content-between mb-2'>
          <div className="flex-start">
              <span className='logo'>SenFlix</span>
          </div>
          <div className="flex-end">
              <span className='item active'>Accueil</span>
              <span className='item'>Nouveautés</span>
              <span className='item'>Profil</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar