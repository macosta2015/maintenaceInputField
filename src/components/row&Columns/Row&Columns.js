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


const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support.
 Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

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
            <Grid class="father-grid">  
              {/* Rowspacing is the key to space the children 'Grid' */}
              <Grid container rowSpacing={'15%'} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={6} >
                  <Item>
                    <Typography>{message}
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={6} >
                  <Item>2</Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={6} >
                  <Item>
                    <IssueData/>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={6} sx={{ display: { xs: 'none', md: 'block' } }} >
                  <Item>
                    4
                  </Item>
                </Grid>
              </Grid>        
            </Grid>
          </div>
      
        );
      }