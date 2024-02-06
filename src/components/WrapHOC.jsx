import { useState } from "react"

const WrapperHoc = (Wrappedcomponent)=>{
  function WrapperHoc(){

    const [counter,setCounter] = useState(0);

    const handleCounter = ()=>{
      setCounter(counter+1)
    }

    return(
      <Wrappedcomponent counter={counter} handleCounter={handleCounter}/>
    )
  }

  return WrapperHoc;
}

export default WrapperHoc;