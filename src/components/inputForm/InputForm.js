import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNumbers } from '../../redux/state/CounterSlice';

const InputForm = () => {
    const [value, setvalue] = useState(0);
  const dispatch=useDispatch()
    return (
        <Stack direction={'row'} sx={{margin:'30px'}} justifyContent={'space-around'} >
             <TextField onChange={(e)=>setvalue(e.target.value)} sx={{width:'40%'}} id="outlined-basic" label="Outlined" variant="outlined" />
             <Button onClick={()=>{dispatch(addNumbers(value))}} size="medium" variant='outlined'>
                <Typography color='#353b48'>Add Numbers</Typography>
             </Button>
            
        </Stack>
    );
};

export default InputForm;