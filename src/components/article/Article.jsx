import React from 'react';
import './Article.css'
const Article = ({ imgs }) => {
    return (
        <div>
            <div>
                <img src={imgs} alt="" />
            </div>
            <div className='box'>
                <p>Sep 26, 2021</p>
                <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
                <p>Read Full Article</p>
            </div>
        </div>

    );
};

export default Article;