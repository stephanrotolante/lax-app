import React, { useContext, useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { AppContext } from  '../../AppContext';
import './css/add-team.css';
import { FormInput, FormDropDown } from '../../components/Inputs';
import { FormButton } from '../../components/Button';


export default () => {

    const formItems = {
        school:{
            hook:useState(''),
            ref: document.getElementById('school')
        },
        coach:{
            hook:useState(''),
            ref: document.getElementById('coach')
        },
        state:{
            hook:useState(''),
            ref: document.getElementById('state')
        },
        record:{
            hook:useState(''),
            ref: document.getElementById('record')
        },
        image:{
            hook:useState(''),
            ref: document.getElementById('hide')

        }

    }

    const {school, coach, state, record,image} = formItems;
    useLayoutEffect(() => {
        console.log("Some Item is being updated",formItems);
    },[school[0],state[0],coach[0],record[0]])
   
    const {hide} = useContext(AppContext);
    const onUpload = e => {
        
        document.getElementById('hide').click();
    }

    const getImage = e => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        const reader = new FileReader();
    
        
        reader.onload = function(e) {
            // The file's text will be printed here
            console.log(e.target.result);
            formItems.image.hook[1](e.target.result);

        };

        reader.readAsDataURL(file);
    }
    const onSubmit = event => {
        console.log('Submitted');
        event.preventDefault();

        Object.values(formItems).map(hook => {

        });

        axios({
            method:"POST",
            url: 'http://localhost:8080/addTeam',
            data: {
                school: school.hook[0],
                state: state.hook[0],
                coach: coach.hook[0],
                record: record.hook[0],
                image: image.hook[0]
            },
            headers: {
                'Content-Type' : 'application/json; charset=UTF-8',
                'Accept': 'Token'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <div className="">
                {!hide && <FormInput label="School Name" setState={school} /> }


                {hide &&<table className="width">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <FormInput id="school" label="School Name" setState={school.hook} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <FormInput id="coach" label="Head Coach" setState={coach.hook} />
                                </td>
                            </tr>
                            <tr>
                                <td >
                                    {/* <FormInput id="state" label="State" setState={state.hook} /> */}
                                    <FormDropDown></FormDropDown>
                                </td>
                                <td>
                                    <FormInput id="record" label="Record" setState={record.hook} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <FormButton type="upload" onClick={onUpload}>Upload Image</FormButton>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                <FormButton type="submit" onClick={onSubmit}>Submit</FormButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>}
                    <img src={formItems.image.hook[0]} />
            <input id="hide" type="file"onClick={onUpload}onChange={getImage} accept="image/*"/> 
        </div>
    );
}