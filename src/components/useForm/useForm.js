import * as React from 'react';
import { useForm } from "react-hook-form";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

   s
//CSS
import './useForm.css'
const message = `Fill out Information: `;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%', // Set width to 100%
}));

const MyForm = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);

    return (
        <div className="grid-container">
            <Grid container className="father-grid" rowSpacing="auto" columnSpacing={'5%'}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="my-grid-item">
                        <Item>
                            <Typography variant='h3'>
                                {message}
                            </Typography>
                        </Item>
                    </div>
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="center ">
                    <Item>
                        <form onSubmit={handleSubmit(handleRegistration)}>
                            <Grid className="children-grid" xs={12} sm={12} md={12} lg={12} xl={12} >
                                <Typography variant='h4'>
                                    <label>Full Name</label>
                                </Typography>
                                <input defaultValue="..." name="name" {...register('name')} />
                                <Typography variant='h4'>
                                    <label>Email</label>
                                </Typography>
                                <input defaultValue="..." type="email" name="email" {...register('email')} />
                                <Typography variant='h4'>
                                    <label>Password</label>
                                </Typography>
                                <input defaultValue="..." type="password" name="password" {...register('password')} />
                                <button>Submit</button>
                            </Grid>
                        </form >
                    </Item>
                </Grid>
            </Grid>
        </div >

    );
};
export default MyForm;











