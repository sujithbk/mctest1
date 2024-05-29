import React ,{useState}from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Five from './Five';

function Third() {

    ///icon change
  
const [isContentVisible, setIsContentVisible] = useState(false);
const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };


  return (
    <div><h6 >Question 1 out of 3</h6>


    <button id='plus' onClick={toggleContentVisibility}>
            {isContentVisible ? <FaMinus /> : <FaPlus/>}
        </button>

    <h2>What are the primary components of variable & semi-variable costs impacting gross margins?</h2>


    {isContentVisible && (
        <div className="content">
        <Five/>
        </div>
    )}
</div>
  )
}

export default Third