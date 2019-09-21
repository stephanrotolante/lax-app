import React, { useContext } from 'react';
import './css/nav-bar.css';
import { AppContext } from '../../AppContext.js'
import menuBars from '../../menuBars.png';


export const NavBar = props => {
    return (
        <div className="lax-app-main-nav-bar">
           <ul>
             {props.children}
           </ul>
        </div>
    );
}

export const NavItem = props => {

     const { setURL, activeNav, activateNav } = useContext(AppContext);

     const { name, children } = props;


     const onClickHandler = () => {
        const { name, children } = props;
        activateNav(name);
        setURL(`/${children.toLowerCase()}`)
     }
    
    return <li onClick={onClickHandler}>
                <a data-active={activeNav===name}>{children || name}</a>
            </li>;
}

export const NavSideBarToggle = () => {
    const { visible, setVisible  } = useContext(AppContext);

    const onClickHandler = () => {
        setVisible(!visible);
    }
    return (
        <li  onClick={onClickHandler} className="test">
          <a>&#9776;</a>
        </li>
    );
}