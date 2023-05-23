import {React, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ResPerson = () => {
    const [formData, setformData] = useState({name:"", email:"", })

    function onChangeFunction(e){
        setformData(e.target.value)
    }

    return(
        <div>
            <p>
                We are in the IssueData
            </p>
            <input
            type="text"
            value={formData}
            onChange={onChangeFunction}
            >
            </input>
            <p>
            The value is {formData} !
            </p>
        </div>
    )
};

export default ResPerson;
