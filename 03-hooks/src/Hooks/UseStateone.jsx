import React, { useState } from 'react'


const UseStateone = () => {

    const [count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
    function decrease(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <>
    <div><h1>UseStateone</h1></div>
    <h1>Count:{count}</h1>
    <button id='Button' onClick={increase}>+</button>
    <button id='Button' onClick={decrease}>-</button>
    <button  id='Button'onClick={reset}>reset</button>
    </>
  )
}

export default UseStateone