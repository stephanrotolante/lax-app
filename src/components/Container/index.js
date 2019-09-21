import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './css/container.css'

export default  props => {
    const { hide }  = useContext(AppContext);
    return <div mobile-size={`${hide}`} className="container">{props.children}</div>
}