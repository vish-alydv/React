import React from 'react'

const Child = ({name,alert}) => {
  return (
    <>
    <div><h1>Child Data name : {name}</h1></div>

    <button id="billu" onClick={alert}>Click Mat Karna</button>
    </>
  )
}

export default Child