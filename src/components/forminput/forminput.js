import {React, useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const IssueData = () => {
    const [inputForm, setInputForm] = useState([])
    const [formData, setformData] = useState({name: "", email: "", message: ""});


    function onChangeFunction(e){
        console.log('Hello World');
        setInputForm(e.target.value)
    }

    return(
        <div>
            <p>
                We are in the IssueData
            </p>
            <input
            type="text"
            value={inputForm}
            onChange={onChangeFunction}
            >
            </input>
            <p>
            The value is {inputForm} !
            </p>
        </div>
    )
};

export default IssueData