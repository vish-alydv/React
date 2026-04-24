import React from 'react'
import Data from '../Data'
import './Design.css'  // path apne hisaab se adjust kar
const Bollywood = () => {
  const BollywoodData = Data.filter(item=>item.category==="Bollywood")
  console.log(BollywoodData)
  return (
    <>
    <div p className="category-label">Bollywood</div>
    {BollywoodData.map((bollydata) =>(
      <>
      <Link to={`/post/${bollydata.id}`}>
      {/* // <div className="article-card"> */}
        <h1>{bollydata.title}</h1>
        <img src={bollydata.img_url}/>
      </div>
      </>
    ))}
    </>
  )
}

export default Bollywood