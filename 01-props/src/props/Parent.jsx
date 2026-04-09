import React from 'react'
import Child from './Child';

const Parent = () => {
    const fullname="Vishal";

    function Alert(){
      alert("Kyo Kiya Click")
    }
  return (
    <>
    <div>Parent</div>
    <Child name={fullname} alert={Alert}/>
    </>
  )
}

export default Parent