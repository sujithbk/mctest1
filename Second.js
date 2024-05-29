import React, {useState}from 'react'
import { useNavigate} from 'react-router-dom';
import { IoIosArrowDropup } from "react-icons/io";
import Third from './Third';

function Second() {

////navigation   
const Navi = useNavigate()

const function1 = ()=>{
    Navi('/')
}
 
///viewmore
const text = <h6>Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).</h6>
 
const [viewmore, setviewmore] = useState(false)

const more = () =>{
    setviewmore(!viewmore)
}



  return (
    <div className='main'>
    <div className='firstP'>red</div>
    <div className='secondP'>
        <div className='bar2'>
            <h4>STEP 1</h4>
            <button id='topA' onClick={function1 }><IoIosArrowDropup  /></button>
            <h2 id='heading'>
            Cost Identification
            </h2>
            <h5>Identify and categorize the various costs influencing margins. <span onClick={ more } >{ viewmore ? text : 'more' }</span> </h5>
            <hr id='hr'></hr>

            <Third/>
           
        </div>
       
    </div>
  
</div>
  )
}

export default Second