import React, {useState} from 'react';
import './CNavbar.css';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

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
            <nav className="navbar">
                <a href="/Artist" className="navbar-logo"><FontAwesomeIcon icon={faPalette} /></a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/Artist' className='nav-links' onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <a href='/Artist/Portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio <i className='fas fa-caret-down' />
                            {dropdown && <Dropdown />}
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Artist/About' className='nav-links' onClick={closeMobileMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/Artist/Contact' className='nav-links' onClick={closeMobileMenu}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='navbar-subbox'/>
        </div>
    )
}

export default Navbar;