import React, { useEffect, useState } from 'react'

const Timer = ({setStop,questionnumber,answered,setAnswered}) => {
    const [timer,setTimer] = useState(30)
    useEffect(()=>{
      if (timer === 0) {
        setStop(true);
      }
      if (answered) {
        return; // If answered, don't continue the timer
      }
        const interval = setInterval(()=>{
        setTimer(prev=>prev-1)
        },1000)
        return ()=> clearInterval(interval)
    },[setStop,timer])

    useEffect(()=>{
    setTimer(30)
   setAnswered(false)
    },[questionnumber])
  return timer
}

export default Timer