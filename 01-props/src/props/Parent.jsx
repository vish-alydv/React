import React from 'react'
import Child from './Child';

const Parent = () => {
    const fullname="Vishal";
  return (
    <>
    <div>Parent</div>
    <Child name={fullname}/>
    </>
  )
}

export default Parent