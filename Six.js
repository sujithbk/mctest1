import { useState } from "react";
import Seven from "./Seven";
import  React from 'react'
import { FiMinimize2 } from "react-icons/fi";


function Six() {
    const [viewmore, setviewmore] = useState(false)

const more = () =>{
    setviewmore(!viewmore)
}

  return (
    <div>How do I connect this to my business context?
        <button><FiMinimize2 onClick={more}  /></button> {viewmore && (
        <div className="content">
        <Seven/>
        </div>
    )}

       
    </div>
  )
}

export default Six