import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/state/CounterSlice';
import InputForm from '../inputForm/InputForm';


const CardPage = () => {
    const count=useSelector((state)=>state.counter.value)
    const disPatch=useDispatch();
    return (
        
            <Card sx={{ width:445 ,bgcolor:'#27ae60' }} >
      
      <CardContent>
        <Typography variant='h4' color={'white'} align={'center'}>{count}</Typography>
      </CardContent>
      <CardActions sx={{ display:'flex', justifyContent:"space-around"}}>
       <Button onClick={()=>{disPatch(increment())}}  size="medium" variant='outlined'>
        <Typography color='#353b48'>increase</Typography>
       </Button>
        <Button onClick={()=>{disPatch(decrement())}} size="medium" variant='outlined'>
        <Typography color='#353b48'>decrease</Typography>
        </Button>
      </CardActions>
      <InputForm></InputForm>
    </Card>
        
    );
};

export default CardPage;