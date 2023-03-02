import React from 'react';
import { Feature } from '../../components';
import Features from '../features/Features';
import './WhatGPT3.css'
const WhatGPT3 = () => {
    return (
        <div className='whatgpt3-section' id='wgpt3'>
            <div className="whatgpt3">
                <div className='top-part'>
                    <Feature title="What is GPT-3" text="" />
                    <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. </p>
                </div>
                <div className='middle-part'>
                    <h1 className='gradient__text'>The possibilities are beyond <br /> your imagination</h1>
                    <p>Explore The Library</p>
                </div>
                <div className='bottom-part'>
                    <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
                    <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                    <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
                </div>
            </div>
        </div>
    );
};

export default WhatGPT3;