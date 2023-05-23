import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ResPerson = () => {
    const [formData, setFormData] = useState({name: "",email: "",message: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };


      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };
    

    return(
        <form onSubmit={handleSubmit}>
            <p>
                Area and name of Employee
            </p>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
            />

            <input
                type="text"
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange}
            />

            <input
                type="text"
                id="message"
                name="message" 
                value={formData.message} 
                onChange={handleChange}
            />

            <p>
            The name is {formData.name} !
            </p>
            <p>
            The email is {formData.email} !
            </p>
            <p>
            The message is {formData.message} !
            </p>
        </form>
    )
};

export default ResPerson;
