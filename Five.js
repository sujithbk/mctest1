import React,{useState} from 'react'
import Six from './Six';

function Five() {
    

    const [isContentVisible, setIsContentVisible] = useState(false);
    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
      };

  return (
    <div className='fivequestion'>
        <button className='fq1'onClick={ toggleContentVisibility}>{isContentVisible }Need more clarification on the section?</button>
        <button className='fq2'onClick={ toggleContentVisibility}>Need more clarification on the section?</button>
        {isContentVisible && (
        <div className="contents">
            <Six/>
        </div>
    )}
    </div>
  )
}

export default Five