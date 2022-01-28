import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './DAbout.css';

//If adding phone number make sure to add a capcha!!!

const DAbout = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                <div className="about-body-d">
                    <h1>About Me:</h1>
                    <p>
                        My name is Leeann Collins. I graduated in 2017 with a bachelors Fine Art degree
                        in Drawing and Painting. While I was getting that degree I took a website building
                        class. This was my introduction to computer science and programming. A few years
                        later, I decided to go back to school to get a degree in computer science. I am 
                        expected to graduate May of 2022.
                    </p>
                    <p>
                        I primarily work in Java as it was the language I was taught in. However, I know
                        some Python, Javascript, HTML, and CSS. I've also worked with React to build this
                        site! I'm sure I will also learn even more as I persue my degree.
                    </p>
                    <div className='abd-experience'>
                        <h2>Education</h2>
                            University of Wisconsin: Milwaukee, Milwaukee, WI - Bachelor of Computer Science: Aug 2019 - May 2022<br/><br/>
                        <h2>Skills</h2>
                            Java<br/>
                            Software Development<br/>
                            Technical Writing<br/>
                            Javascript<br/>
                            HTML5<br/>
                            CSS<br/>
                            React<br/>
                            Linux<br/>
                            Visual Studio Code<br/>
                            Eclipse<br/>
                            Git<br/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DAbout;