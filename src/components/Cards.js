import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { plansInfo } from '../data'


const Cards = () => {
  const [isSelected, setisSelected] = useState("")

  /* useEffect(() => {
  
    let cards = document.querySelectorAll('.card')
    let buttons = document.querySelectorAll('.learn-more-button')
    let currentActive = Array.prototype.indexOf.call(cards, document.querySelector(".card-active"))
    
    document.addEventListener('keydown', (e) => {
      if(e.key === "ArrowLeft" && currentActive !== 0){
          cards[currentActive - 1].classList.add("card-active")
          buttons[currentActive - 1].classList.add("button-active")
          cards[currentActive].classList.remove("card-active")
          buttons[currentActive].classList.remove("button-active")
          currentActive = Array.prototype.indexOf.call(cards, document.querySelector(".card-active"))
      }
      else if(e.key === "ArrowRight" && currentActive !== 2){
        cards[currentActive + 1].classList.add("card-active")
        buttons[currentActive + 1].classList.add("button-active")
        cards[currentActive].classList.remove("card-active")
        buttons[currentActive].classList.remove("button-active")
        currentActive = Array.prototype.indexOf.call(cards, document.querySelector(".card-active"))
    }
    })
    
    let suggested = cards[1]
    let suggestedButton = document.querySelectorAll('.learn-more-button')[1]
    
    cards[0].addEventListener('click', () => {
      suggested.classList.remove("card-active")
      suggestedButton.classList.remove("button-active")
      cards[2].classList.remove("card-active")
      buttons[2].classList.remove("button-active")
    })

    cards[2].addEventListener('click', () => {
      suggested.classList.remove("card-active")
      suggestedButton.classList.remove("button-active")
      cards[0].classList.remove("card-active")
      buttons[0].classList.remove("button-active")
    })

    suggested.addEventListener('click', () => {
      suggested.classList.add("card-active")
      suggestedButton.classList.add("button-active") 
      cards[0].classList.remove("card-active")
      buttons[0].classList.remove("button-active")
      cards[2].classList.remove("card-active")
      buttons[2].classList.remove("button-active")
    })
  })
   */


  const cardRef = useRef();
  let currentCard = cardRef.current;

  useEffect(() => {
    cardRef.current.click()
  }, [currentCard])


  return plansInfo.map((plan, index) => (
    <div ref={plan.name === "Professional" ? cardRef : null} className={isSelected === plan.id ? "card card-active" : "card"} key={index} onClick={() => setisSelected(plan.id)}>
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
      <button className={isSelected === plan.id ? 'learn-more-button button-active' : 'learn-more-button'}>LEARN MORE</button>
    </div>
  )
    
  )
}

export default Cards