import React from 'react';
import possibility from '../../assets/possibility.png'
import './Possibility.css'
const Possibility = () => {
    return (
        <div className='possibility-section' id='possibility'>
            <div className='left-part'>
                <img src={possibility} alt="" />
            </div>
            <div className='right-part'>
                <p className='sky-p'>Request Early Access to Get Started</p>
                <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
                <p className='feature-p'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <p className='orange-p'>Request Early Access to Get Started</p>
            </div>
        </div>
    );
};

export default Possibility;