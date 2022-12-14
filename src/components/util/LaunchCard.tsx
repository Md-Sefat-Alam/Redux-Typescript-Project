import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardTextGroup from './CardTextGroup';
import { LaunchesFetchModel } from '../../rtk/features/launches/launchesSlice';
import {useNavigate} from 'react-router-dom'


export interface ILaunchesCardProps {
  launch: LaunchesFetchModel
}

export default function LaunchCard(props: ILaunchesCardProps) {
  const navigate=useNavigate()
  const { launch } = props;
  const { flight_number, launch_date_local, launch_site, launch_success, mission_name, rocket } = launch;

  const handleClick = (n:number) =>{
    navigate('/launch/'+n)
  }
  
  return (
    <Card onClick={()=>handleClick(flight_number)} sx={{ maxWidth: 275, cursor: 'pointer' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }} >
          <CardTextGroup title='Flight' text={flight_number.toLocaleString()} />
          <CardTextGroup title='Date' text={new Date(launch_date_local).toLocaleDateString()} />
        </Box>
        <CardTextGroup title='Mission' text={mission_name} />
        <CardTextGroup title='Rocket' text={rocket.rocket_name} />
        <CardTextGroup title='Site' text={launch_site.site_name} />
        <CardTextGroup title='Launch Status' text={launch_success ? 'Success' : 'Faild'} styles={launch_success ? { fontSize: '12px', border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'green', color: 'white' } : { fontSize: '12px', border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'red', color: 'white' }} />
      </CardContent>
    </Card>
  );
}
