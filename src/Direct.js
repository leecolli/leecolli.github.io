import './Directory.css';
import React, { Component, useState } from 'react';
import selfie from'./SelfPic.png';

class Direct extends Component {

    render(){
        return (
            <div className='content-d'>
                <img src={selfie} alt="Photo of Leeann" className="img"/>
                <div className="outerBox">
                    <div className="innerBox">
                        <h1 className="intro">
                            My name is Leeann.<br/>
                            I am an Artist and Developer.<br/>
                            Which part would you like to know?
                        </h1>
                    </div>
                    <div className="buttonBox">
                        <button className="buttonC">
                            <a href="/Artist" className="a">
                                Artist
                            </a>
                        </button>
                        <button className="buttonD">
                            <a href="/Developer" className="a">    
                                Developer
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        );
    } 
};

export default Direct;