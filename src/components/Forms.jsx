import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';


function Forms() {
    const [textInput,setTextInput] = useState('');

    const handleEventChange =event=>{
        setTextInput(event.target.value)
    };

    const updateClick =()=>{
        console.log(textInput)
    }

    return (
    <Container maxWidth={false}>

        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Review</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            multiline
            rows={5}
            placeholder="Product Review"
            value={textInput}
            onChange={handleEventChange}
          />
        </FormControl>
        <Box textAlign={'center'}>
        <Button variant='contained' endIcon={<SendRoundedIcon />} onClick={updateClick}>Submit</Button>
        </Box>
      </Container>
    );

}

  export default Forms;