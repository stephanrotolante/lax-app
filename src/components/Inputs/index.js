import React,{ useState} from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './css/input.css';

const stateConstant = ["FL","FL","FL","FL","FL","FL","FL","FL"]

export const FormInput = props => {
    const { name, label, setState = [], id } = props;

    const handleOnChange = e => {
        setState[1](e.target.value);
    }
    return (
        <div className="input-container">
            <label className="block input-label">{label}</label>
            <div className="input-wrapper">
                <input id={id} className="block customize-input" type="text" name={name} value={setState[0]}  onChange={handleOnChange}/>
            </div>
        </div>
    );
}


export const FormDropDown = (props) => {
    const [boolean,setBoolean]= useState(false);
    return (
        // <div className="form-drop-down-cont">
        //     <label className="block input-label">State</label>

            <div className="form-drop-down-value">
                <div id="in-bl" className="three-quarter">FL</div>
                <div id="in-bl" className="quarter" onClick={() => setBoolean(!boolean)}><FaAngleDown color="black"/></div>
              
            </div>

        //     {boolean && 
        //     <div className="form-drop-down-list">
        //         <ul>
        //             {stateConstant.map(state => {
        //                 return <li>{state}</li>
        //             })}
        //         </ul>
        //     </div>
        //     }

        // </div>
    );
}

export const SearchBar = () => {
    return (
        <div>
            <input />
        </div>
    );
}