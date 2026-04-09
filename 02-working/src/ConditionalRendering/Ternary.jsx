import React from 'react'

const Ternary = () => {
    const isLoggedin = false
  return (
    <>
    <div>Ternary</div>
    {isLoggedin?"Welcome To DashBoard":"Please Login"}
    </>
  )
}

export default Ternary