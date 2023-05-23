import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//CSS
import './Row&Columns.css'
// Components
import IssueData from '../forminput/forminput.js'
import ResPerson from '../resPerson/resPerson.js';
import AreaInfo from '../areaInfo/areaInfo.js'


const message = `Fill up the information asked: `;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <div className="grid-container">
              <Grid container className="father-grid"rowSpacing={'0%'} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="my-grid-item">
                        <Item>
                            <Typography variant='h3'>
                                {message}
                            </Typography>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={12} >
                  <Item>
                    <AreaInfo/>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={12} >
                  <Item>
                    <ResPerson/>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={12} sx={{ display: { xs: 'none', md: 'block' } }} >
                  <Item>
                    <IssueData/>                  
                  </Item>
                </Grid>
              </Grid>        
        </div>
      
        );
      }