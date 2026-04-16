import React, { useState } from 'react'

const Multicounter = () => {
    count [count,setCount] = useState([0,0])
    console.log(count[1]);

    const increment = (index) =>{
        setCount((prev)=>{
            const newCount = [...prevCount]
            newCount[index] +=1
            return newCount
        })
    }
  return (
    <div>
        {count.map((counter,index)=>(
            <div>
                <h1> count:{counter}</h1>
                <button onClick={()=> increment(index)}>increment</button>
            </div>
        ))}
        </div>
  )
}

export default Multicounter