import React from 'react';
import Navbar from '../CNavbar';
import './Portfolio.css';
import Footer from '../Footer';

const Portfolio = () => {
    return (
        <div className='body'>
            <div className='content-a'>
            <Navbar />
                <div className="text_body_portfolio">
                    <h1>Welcome to my portfolio!</h1><br/> 
                    <p>
                        When you hover over the portfolio menu a dropdown will appear. In the dropdown are different series, style, and mediums that
                        I have artwork in. Feel free to browse through them all!
                    </p>
                    <p>
                        If you would like to contact me about a piece or you have a question in general, you can get ahold of me by clicking 'Contact'
                        and filling out the form, which will email me your message.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;