import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LaunchCard from '../util/LaunchCard';


export interface ILaunchesProps {
}

export default function Launches (props: ILaunchesProps) {
  return (
    <Box sx={{marginTop: '20px'}}>
        <Typography component={'div'}></Typography>
        <Grid container rowSpacing={1} gap={'15px'} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
            {
                [0,1,2,3,4,5,6].map(flight=><Grid item xs={2}><LaunchCard key={flight}/></Grid>)
            }
        </Grid>
    </Box>
  );
}


