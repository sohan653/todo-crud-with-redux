import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CardPage from '../card/Card';

const CounterApp = () => {
    return (
        <Box sx={{ width: '100%', }}  >
                <Stack alignItems={'center'}>
                <Typography sx={{borderRadius: '20px',width:'50%'}} variant='h4' gutterBottom  align={'center'} bgcolor={'#27ae60'}>
                    Counter App
                </Typography>
                </Stack>
                <Stack alignItems={'center'} m={'25px'}>
                    <CardPage></CardPage>
                </Stack>
        </Box>
    );
};

export default CounterApp;