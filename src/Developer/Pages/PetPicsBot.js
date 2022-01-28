import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Projects.css';


const PetPicsBot = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                <div className='portfolio-content'>
                    <h1>PetPicsBot Project</h1>
                    <h3>Concept</h3>
                        <p>
                            What if there were a discord bot that would give you random pictures of members' pets when asked? Well this is that bot!
                        </p>
                    <h3>How it works</h3>
                        <p>
                            With this bot you can get a random pet picture of any pet or a specific one. 
                            It can also create new folders for new pets and add pictures to them. 
                            Also, this bot can display a list of current pet folders so you know what’s available.
                        </p>
                    <h3>What I used to make it</h3>
                    <ul>
                        <li>Python</li>
                        <li>Discord.py</li>
                    </ul>
                    <h3>Guided along by Charles Mogan</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PetPicsBot;