import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LaunchCard from '../util/LaunchCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector, useAppDispatch } from '../../rtk/app/hooks';
import {fetchAllLaunches, selectLaunches} from '../../rtk/features/launches/launchesSlice'


export interface ILaunchesProps {
}


export default function Launches (props: ILaunchesProps) {
  const dispatch=useAppDispatch()
  const launches = useAppSelector(selectLaunches);
  
  React.useEffect(()=>{
    dispatch(fetchAllLaunches())
  },[])
  if(launches.status==='loading'){
    return <Box sx={{width:'100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress/>
    </Box>
  }
  return (
    <Box sx={{marginTop: '20px'}}>
        <Typography component={'div'}></Typography>
        <Grid container rowSpacing={2} gap={'15px'} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
            {
                launches.value.map((launch,index)=><Grid key={index} item xs={2}><LaunchCard launch={launch}/></Grid>)
            }
        </Grid>
    </Box>
  );
}


