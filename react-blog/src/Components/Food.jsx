import React from 'react'
import Data from '../Data'
const Food = () => {
  const Fooddata = Data.filter(item=>item.category==="Food")
  console.log(Fooddata)
  return (
    <>
    <div>Food</div>
    {Fooddata.map((fooddata) =>(
      <>
      <h1>{fooddata.title}</h1>
      <img src={fooddata.img_url}/>
      </>
    ))}
    </>
  )
}

export default Food