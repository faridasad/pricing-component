import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { plansInfo } from '../data'


const Cards = ({arrowID}) => {
  const [selected, setSelected] = useState("")

  
  const cardRef = useRef();

  useEffect(() => {
    cardRef.current.click()
  }, [])

  useEffect(() => {
    setSelected(arrowID)
  }, [arrowID])


  return plansInfo.map((plan, index) => (
    <div ref={plan.name === "Professional" ? cardRef : null} className={selected === plan.id ? "card card-active" : "card"} key={index} onClick={() => {setSelected(plan.id)}}>
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
      <button className={selected === plan.id ? 'learn-more-button button-active' : 'learn-more-button'}>LEARN MORE</button>
    </div>
  )
    
  )
}

export default Cards