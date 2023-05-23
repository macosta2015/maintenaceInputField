import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AreaInfo() {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: '1%', width: '50%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="...area of work"
            />
            <TextField
              required
              id="descriptionOfWork"
              label="...description of work"
            />
            <TextField
              id="Name"
              label="Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>
      );
    }