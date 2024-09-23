 "use client"
 import React from 'react'
 import Countdown from 'react-countdown'


  const endingDate = new Date("2024-12-30") 

const CountDown = () => {
  return (
    
      <Countdown className='countdown' date={endingDate}/>
    
  )
}

export default CountDown
