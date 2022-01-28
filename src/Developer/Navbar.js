import React, {useState} from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => setDropDown(false);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        setDropDown(false);
    };

    return (
        <div>
            <nav className="navbar-d">
                <a href="/Developer" className="navbar-logo-d"><FontAwesomeIcon icon={faLaptopCode}/></a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu-d active' : 'nav-menu-d'}>
                    <li className='nav-item-d'>
                        <a href='/Developer' className='nav-links-d' onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className='nav-item-d' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <a href='/Developer/Projects' className='nav-links-d' onClick={closeMobileMenu}>
                            Projects <i className='fas fa-caret-down' />
                            {dropdown && <Dropdown />}
                        </a>
                    </li>
                    <li className='nav-item-d'>
                        <a href='/Developer/About' className='nav-links-d' onClick={closeMobileMenu}>About</a>
                    </li>
                    <li className='nav-item-d'>
                        <a href='/Developer/Contact' className='nav-links-d' onClick={closeMobileMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='navbar-subbox-d'/>
        </div>
    )
}

export default Navbar;