import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu-d clicked' : 'dropdown-menu-d'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Dropdown;