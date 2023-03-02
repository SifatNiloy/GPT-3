import React from 'react';
import { blog1, blog2, blog3, blog4, blog5 } from './imports'
import Article from '../../components/article/Article';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-section'>
            <div>
                <h1 className='gradient__text'>A lot is happening, <br />
                    We are blogging about it.</h1>
            </div>
            <div className='blogs'>
                <div>
                    <Article imgs={blog1} />
                    
                </div>
                <div className="blogs-group">
                    <Article imgs={blog2} />
                    <Article imgs={blog3} />
                    <Article imgs={blog4} />
                    <Article imgs={blog5} />
                </div>
            </div>
            
        </div>
    );
};

export default Blog;