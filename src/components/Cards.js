import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { plansInfo } from '../data'


const Cards = () => {
  const [isSelected, setisSelected] = useState("")
  let [current, setCurrent] = useState(1)
  

  const cardRef = useRef();
  let currentCard = cardRef.current;
  let cards = document.querySelectorAll('.card');
  let buttons = document.querySelectorAll('.learn-more-button')

  /* document.onkeydown = function(e) {
    if(e.key === "ArrowLeft" && current !== 0){
      cards[current - 1].classList.add("card-active")
      buttons[current - 1].classList.add("button-active")
      cards[current].classList.remove("card-active")
      buttons[current].classList.remove("button-active")
      setCurrent(current - 1)
    }
    else if(e.key === "ArrowRight" && current !== 2){
      cards[current + 1].classList.add("card-active")
      buttons[current + 1].classList.add("button-active")
      cards[current].classList.remove("card-active")
      buttons[current].classList.remove("button-active")
      setCurrent(current + 1)
    }
  } */
  

  useEffect(() => {
    cardRef.current.click()
  }, [currentCard])


  /* function handleClick(){
    setCurrent(Array.prototype.indexOf.call(cards, document.querySelector(".card-active")))
    console.log(current);
  } */


  return plansInfo.map((plan, index) => (
    <div ref={plan.name === "Professional" ? cardRef : null} className={isSelected === plan.id ? "card card-active" : "card"} key={index} onClick={() => {setisSelected(plan.id)}}>
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