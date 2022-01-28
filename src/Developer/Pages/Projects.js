import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Projects.css';


const Project = () => {
    return (
        <div className='body'>
            <div className='content-b'>
                <Navbar />
                    <div className="text-body-projects">
                        <h1>Behold my projects!</h1><br/> 
                        <p>
                            When you hover over the projects menu a dropdown will appear. In the dropdown are different projects I've done.
                            Feel free to browse through them all!
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

export default Project;