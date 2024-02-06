import React from 'react'
import  { useState } from 'react'

function Wrapper(Component) {
 
    const [counter, setCounter] = useState(0);

  const handleIncreament = ()=>{
    setCounter(counter+1);
  }

  return (
    <div>
      {Component.render(counter, handleIncreament)}
    </div>
  )

 }


export default Wrapper;
