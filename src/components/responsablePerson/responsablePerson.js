import {React, useState} from 'react';
import Button from '@mui/material/Button';


const ResPerson = () => {
    const [inputForm, setInputForm] = useState([])

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

export default ResPerson;
