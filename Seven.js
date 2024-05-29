import React from 'react'
 import { useState } from 'react';
import { ImIndentIncrease } from "react-icons/im";
import { HiMiniChevronDown } from "react-icons/hi2";
function Seven() {

  

  const [viewmore, setviewmore] = useState(false)

  const more = () =>{
      setviewmore(!viewmore)
  }

  return (
    <div className='final'>


<div className='last'>
        <div className='p1'>
        <ImIndentIncrease  /><h6 id='h7'>Add raw materials costs as variable costs</h6><HiMiniChevronDown id='Hisy' onClick={more} />
        
        </div>
        <p className='pt'>Energy and Utility costs are Lorem ipsum dolor sit amet...</p>

        
        {viewmore && (
       
        <button>classic</button>
        
    )}
    </div>
 
    <div className='last'>
        <div className='p1'>
        <ImIndentIncrease /><h6 id='h7'>Add raw materials costs as variable costs</h6><HiMiniChevronDown id='Hisy' />
        
        </div>
        <p className='pt'>Energy and Utility costs are Lorem ipsum dolor sit amet...</p>
    </div>
    

    </div>
  )
}

export default Seven