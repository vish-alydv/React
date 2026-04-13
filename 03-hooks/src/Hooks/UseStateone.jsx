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
    <div>UseStateone</div>
    <h1>Count:{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={increase}>-</button>
    <button onClick={increase}>reset</button>
    </>
  )
}

export default UseStateone