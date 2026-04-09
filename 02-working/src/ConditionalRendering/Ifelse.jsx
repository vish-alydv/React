import React from 'react'

const Ifelse = () => {

    const isAgent=false;
    let msg;

    if(isAgent){
        msg="Khatam..Tata..Bye"
    }

    else{
        msg="Welcome Back Lahore"
    }

  return (
    <>
    <div>Ifelse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default Ifelse