import * as React from 'react';
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import { useAppDispatch, useAppSelector } from '../../rtk/app/hooks';
import { fetchALaunch } from '../../rtk/features/launch/launchSlice';
import { Box, CircularProgress, Typography, Avatar, Divider } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import CardTextGroup from '../../components/util/CardTextGroup';
import ImageView from '../../components/util/ImagesView';

export interface ILaunchProps {
}

export default function Launch(props: ILaunchProps) {
  const { flight_number } = useParams();
  const dispatch = useAppDispatch()
  const launch = useAppSelector((state) => state.launch)
  const { launch_date_local, launch_site, launch_success, mission_name, rocket, details, links, } = launch.value;

  React.useEffect(() => {
    if (flight_number !== undefined) {
      dispatch(fetchALaunch(flight_number))
    }
  }, [flight_number, dispatch])

  if (launch.status === 'loading') {
    return <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  }
  console.log(launch.value)
  return (
    <Container maxWidth={'xl'} sx={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <Box sx={{ position: 'relative', border: '1px solid lightgray', borderRadius: '10px', minHeight: '300px', padding: '10px' }}>
        <Typography component="p" sx={{ position: 'absolute', top: '-13px', backgroundColor: 'white' }}>Flight Informations</Typography>
        <Avatar src='https://images2.imgbox.com/63/c5/0OIpD59z_o.png' sx={{ bgcolor: deepOrange[500], position: 'absolute', top: '5px', right: '5px', borderRadius: "10px", minWidth: '200px', minHeight: '200px' }} variant="square">
          Not Found
        </Avatar>
        <Box sx={{ marginTop: '20px' }}>
          <CardTextGroup title='Date:' text={new Date(launch_date_local).toLocaleDateString()} />
          <CardTextGroup title='Flight Id:' text={"" + flight_number} />
          <CardTextGroup title='Mission Name:' text={mission_name} />

          <Divider sx={{ marginY: '10px', maxWidth: '400px' }} />

          <CardTextGroup title='Site Id:' text={launch_site.site_id} styles={{ fontSize: '14px', fontWeight: '0px' }} />
          <CardTextGroup title='Site Name:' text={launch_site.site_name_long} />

          <Divider sx={{ marginY: '10px', maxWidth: '400px' }} />

          <CardTextGroup title='Rocket Id:' text={rocket.rocket_id} styles={{ fontSize: '14px', fontWeight: '0px' }} />
          <CardTextGroup title='Rocket Name:' text={rocket.rocket_name} />

          <Divider sx={{ marginY: '10px', maxWidth: '400px' }} />

          <CardTextGroup title='Launch Success:' text={launch_success ? 'Success' : 'Faild'} styles={launch_success ? { fontSize: '12px', border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'green', color: 'white' } : { fontSize: '12px', border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'red', color: 'white' }} />
          {details &&
            <CardTextGroup title='Launch-Details:' text={details} styles={{ fontSize: '15px', fontWeight: '0px' }} />
          }
        </Box>
      </Box>
      <Box sx={{ position: 'relative', border: '1px solid lightgray', borderRadius: '10px', minHeight: '300px', padding: '10px', }}>
        <Typography component="p" sx={{ position: 'absolute', top: '-13px', backgroundColor: 'white' }}>Images</Typography>
        <Box>
          <ImageView/>
        </Box>
      </Box>
    </Container>
  );
}
