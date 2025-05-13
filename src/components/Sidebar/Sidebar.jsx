import React from 'react'

function Sidebar() {
  return (
    <div className='m-3 position-fixed'> 
    <div className='d-flex flex-column gap-3'>
        <img src="src\assets\text-logo.png" alt="" className='logo-text'/>
        <div className='menu-items'><i className="bi bi-house-door"></i>Home</div>
        <div className='menu-items'><i className="bi bi-search"></i>Search</div>
        <div className='menu-items'><i className="bi bi-compass"></i>Explore</div>
        <div className='menu-items'><i className="bi bi-person-badge"></i>Proile</div>
    </div>

    <div className='position-fixed mb-3 bottom-0 d-flex flex-column gap-3'>
        <div className='menu-items'><i className="bi bi-at"></i>Community</div>
        <div className='menu-items'><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar