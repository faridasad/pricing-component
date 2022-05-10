import React from 'react'
import { useState, useEffect } from 'react'
import { plansInfo } from '../data'


const Cards = () => {

  const [isSelected, setisSelected] = useState("")

  

  useEffect(() => {

    let suggested = document.querySelectorAll('.card')[1]
    
    document.querySelectorAll('.card')[0].addEventListener('click', () => {
      suggested.className = "card"
    })

    document.querySelectorAll('.card')[2].addEventListener('click', () => {
      suggested.className = "card"
    })

    suggested.addEventListener('click', () => {
      suggested.className = "card card-active"
    })
  })
  

  return plansInfo.map((plan, index) => (
    <div className={plan.name === "Professional" ? "card card-active" : isSelected === plan.id ? "card card-active" : "card"} key={index} onClick={() => setisSelected(plan.id)}>
      <p className='plan-nametag'>{plan.name}</p>
      <h1 className='plan-price'>{plan.price}</h1>
      <div className='extra-info-container'>
        <p className='storage-amount'>{plan.storage}</p>
        <p className='users-allowed'>{plan.accounts}</p>
        <p className='data-send'>{plan.sharelimit}</p>
      </div>
      <button className='learn-more-button'>LEARN MORE</button>
    </div>
  )
    
  )
}

export default Cards