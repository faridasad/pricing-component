import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
          <h3>Our Pricing</h3>
          <div className='toggle-container'>
            <p>Annualy</p>
            <label className="switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" defaultChecked />
              <div className="slider round"></div>
            </label>
            <p>Monthly</p>
          </div>
    </div>
  )
}

export default Header