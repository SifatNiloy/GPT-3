import React from 'react';
import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
const Brand = () => {
    return (
        <div className='brands'>
            <div className='images'>
                <img src={google} alt="" />
                <img src={slack} alt="" />
                <img src={atlassian} alt="" />
                <img src={dropbox} alt="" />
                <img src={shopify} alt="" />
            </div>
        </div>
    );
};

export default Brand;