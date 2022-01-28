import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Projects.css';


const Website = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                <div className='portfolio-content'>
                    <h1>Website Project</h1>
                    <h3>Concept</h3>
                    <p>
                        I wanted to create a portfolio website for both my art and my programming. 
                        So I knew I wanted a divergence of the two, which is where I came up with the directory page. 
                        Then for each one I just wanted a simple website that would show my art and projects. 
                        For the art side I chose to display my art in their own categories depending on series/media. 
                        Then I used React to create the gallery that would display the images. 
                        I chose this style, because it was a common thing I saw on other artists' websites.
                        The developer side was a little more tricky for me as I’d never heard of displaying programming work through a website as a portfolio.
                        So I’ve given each project their own page where I can go into detail about each of them.
                    </p>
                    <h3>What I used to make it</h3>
                    <ul style={{listStyle:'none'}}>
                        <li>React</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Website;