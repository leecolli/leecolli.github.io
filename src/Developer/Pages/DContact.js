import React from 'react';
import Navbar from '../Navbar';
import './Contact.css';
import Footer from '../Footer';


const DContact = () => {
    return (
        <div className='body'>
            <div className='content-b'>
            <Navbar/>
            <div className='contact-text-d'>
                <h1>Contact</h1>
                <p>
                    Need to get in contact or just want to send a message my way? Use this form:
                </p>
            </div>
            <div className="container">
                <form id="fcf-form-id" className="fcf-form-class" method="get" action="./contact-form-process.php">
            
                    <div className="fcf-form-group">
                        <label for="Name" className="fcf-label">Your name</label>
                        <div className="fcf-input-group">
                            <input type="text" id="Name" name="Name" className="fcf-form-control" required />
                        </div>
                    </div>

                    <div className="fcf-form-group">
                        <label for="Email" className="fcf-label">Your email address</label>
                        <div className="fcf-input-group">
                            <input type="email" id="Email" name="Email" className="fcf-form-control" required />
                        </div>
                    </div>

                    <div className="fcf-form-group">
                        <label for="Message" className="fcf-label">Your message</label>
                        <div className="fcf-input-group">
                            <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxlength="3000" required></textarea>
                        </div>
                    </div>

                    <div className="fcf-form-group">
                        <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                    </div>

                    <div className="fcf-credit" id="fcf-credit">
                        Simple HTML email form provided by: <a href="https://www.freecontactform.com" target="_blank">FreeContactForm.com</a>
                    </div>

                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default DContact;