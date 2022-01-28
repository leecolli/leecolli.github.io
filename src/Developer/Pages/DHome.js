import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './DHome.css';


const Dev = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                <h1 className="d_head">I am a Developer with a passion for thinking and programming.</h1>
                <p className="d_head">What should I put here?</p>
            </div>
            <Footer />
        </div>
    );
};

export default Dev;