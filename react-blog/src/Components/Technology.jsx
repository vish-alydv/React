import React from 'react'
import Data from '../Data'
const Technology = () => {
   const TechnologyData = Data.filter(item=>item.category==="Technology")
  console.log(TechnologyData)
  return (
    <>
    <div>Technology</div>
    {TechnologyData.map((telldata) =>(
      <>
      <h1>{telldata.title}</h1>
      <img src={telldata.img_url}/>
      </>
    ))}
    </>
  )
}

export default Technology