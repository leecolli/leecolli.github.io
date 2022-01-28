import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-d'>
            <div className="redirect">
                    <p>
                        I also am an Artist that works in many mediums, so feel free to check out my other website.<br/>
                        To the crossroad!<br/>
                    </p>
                    <button className="go-d">
                        <a href="/" className="a">Go!</a>
                    </button>
                </div>
            <div className='copyright'>
                Copyright <i className='far fa-copyright symbol' /> 2021 by Leeann Collins. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;