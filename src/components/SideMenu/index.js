import React, {useContext} from 'react';
import { AppContext } from '../../AppContext';
import './css/side-menu.css';


const SideMenu = props => { 

    const { visible, setVisible } = useContext(AppContext);
    const { children } = props

    const clickHandler = () => {
        setVisible(!visible);
    }
    return (
        <div className="side-menu">
            <a className="close-btn" onClick={clickHandler}>&times;</a>
                {children}
            
        </div>
    );
}


export const SideMenuItem = props => {
    const {setURL, activeNav, activateNav, setVisible} = useContext(AppContext);

    const onClickHandler = () => {
        const { name, children } = props;
        activateNav(name);
        setURL(`/${children.toLowerCase()}`);
        setVisible(false);
    }
    const {name, children} = props;
    return(
            <a onClick={onClickHandler} data-active={activeNav === name }>{children || name}</a>
    );
}

export default SideMenu;