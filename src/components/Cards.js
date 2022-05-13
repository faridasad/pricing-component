import React from 'react'
import { useState, useEffect } from 'react'
import { plansInfo } from '../data'


const Cards = () => {

  const [isSelected, setisSelected] = useState("")

  

  useEffect(() => {
    let suggested = document.querySelectorAll('.card')[1]
    let suggestedButton = document.querySelectorAll('.learn-more-button')[1]
    
    document.querySelectorAll('.card')[0].addEventListener('click', () => {
      suggested.className = "card"
      suggestedButton.className = "learn-more-button"
    })

    document.querySelectorAll('.card')[2].addEventListener('click', () => {
      suggested.className = "card"
      suggestedButton.className = "learn-more-button"
    })

    suggested.addEventListener('click', () => {
      suggested.className = "card card-active"
      suggestedButton.className = "learn-more-button button-active"
    })
  })
  

  return plansInfo.map((plan, index) => (
    <div className={plan.name === "Professional" ? "card card-active" : isSelected === plan.id ? "card card-active" : "card"} key={index} onClick={() => setisSelected(plan.id)}>
      <p className='plan-nametag'>{plan.name}</p>
      <h1 className='plan-price'>{plan.price}</h1>
      <div className='extra-info-container'>
        <div className='seperation-line'></div>
        <p className='storage-amount'>{plan.storage}</p>
        <div className='seperation-line'></div>
        <p className='users-allowed'>{plan.accounts}</p>
        <div className='seperation-line'></div>
        <p className='data-send'>{plan.sharelimit}</p>
        <div className='seperation-line'></div>
      </div>
      <button className={plan.name === "Professional" ? 'learn-more-button button-active' : isSelected === plan.id ? 'learn-more-button button-active' : 'learn-more-button'}>LEARN MORE</button>
    </div>
  )
    
  )
}

export default Cards