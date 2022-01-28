import React from 'react';
import Navbar from '../CNavbar';
import './CAbout.css';
import Footer from '../Footer';


const CAbout = () => {
    return (
        <div className='body'>
            <div className='content-a'>
            <Navbar />
            <div className="about_body">
                <h1 className="ca-title-top">About Me:</h1>
                <br/>
                <div className="ca-under-box"></div>
                <p className="ca-summary">
                    Hello! My name is Leeann Collins. I am an artist of many mediums. I graduated in 2017 from Northern 
                    Michigan University with a bachelors degree in Fine art, specifically drawing and painting. That being
                    said, drawing and painting are my strongest mediums. Other mediums that I've used are sculpture,
                    sewing, digital painting, and costume building. In painting I primarily work in acrylics, but also
                    use ink and watercolor. I like portraits and nature, but for some mediums my favorite is abstract.
                </p>
                <p>
                    <h1 className="ca-title-top">My Experience:</h1>
                    <br/>
                    <div className="ca-experience-box">
                        <h2 className="ca-title">Education</h2>
                        Northern Michigan University, Marquette, MI - Bachelor of Fine Arts: Drawing and Painting: Aug 2013 - Aug 2017<br/><br/>

                        <h2 className="ca-title">Awards</h2>
                        Best of Show: Emerge Show, Peter White Library. Marquette, MI. 2016<br/>
                        Honorable Mention: Glacier Glide Art Show, Presque Isle Park. Marquette, MI. 2016<br/><br/>
                        
                        <h2 className="ca-title">Galleries</h2>
                        Zero Degrees Gallery, Marquette, MI: Aug2016-Jul2017<br/><br/>
                        
                        <h2 className="ca-title">Shows</h2>
                        Winter 2017 Senior Exhibition, DeVos Art Museum. Marquette, MI. 2017<br/>
                        Emerge Show, Peter White Libary. Marquette, MI. 2016<br/>
                        Glacier Glide Art Show, Presque Isle Park. Marquette, MI. 2016<br/><br/>
                        
                        <h2 className="ca-title">Festivals</h2>
                        Lake Country Art Festival 2019<br/>
                        Delafield Art Walk 2019<br/>
                        Luxembourg Fest Art and Craft Fair 2019<br/>
                        Monona Art and Craft Fair 2019<br/>

                        <div className="ca-under-box"/>
                    </div>
                </p>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default CAbout;