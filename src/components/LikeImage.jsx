import React, { useState } from 'react'
import WrapperHoc from "./WrapHOC"
 function LikeImage({counter,handleCounter}) {

  
  return (
    <div>
      <button onClick={handleCounter}>Like Image {counter}</button>
    </div>
  )
}
export default WrapperHoc(LikeImage);