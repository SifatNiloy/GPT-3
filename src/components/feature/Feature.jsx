import React from 'react';
import './Feature.css'
const Feature = ({ title, text }) => {
    return (
        <div className='feature'>
            <div className='feature-title'>
                <div />
                <h1>{title}</h1>
            </div>
            <div className='feature-p'>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;