import React from 'react';
import Navbar from '../CNavbar';
import './CHome.css';
import Footer from '../Footer';
/* Note-to-self: ../../App.cs - if the lettering doesn't work on the pages */


const Create = () => {
    return (
        <div className='body'>
            <div className='content-a'>
            <Navbar />
            <h1 className="c_head">
                I am an Artist.
            </h1>
            <h2 className="c_head_b">I love drawing, painting, and multimedia.</h2>
            <p className="c_head_b">
                [Insert big picture of self being all artsy n stuff]
            </p>
            </div>
            <Footer />
        </div>
    );
};

export default Create;