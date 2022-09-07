import * as React from 'react';
import { useParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import { useAppDispatch, useAppSelector } from '../../rtk/app/hooks';
import { fetchALaunch } from '../../rtk/features/launch/launchSlice';

export interface ILaunchProps {
}

export default function Launch(props: ILaunchProps) {
  const { flight_number } = useParams();
  const dispatch = useAppDispatch()
  const launch = useAppSelector((state) => state.launch)
  console.log(launch)

  React.useEffect(() => {
    if (flight_number !== undefined) {
      dispatch(fetchALaunch(flight_number))
    }
  }, [flight_number, dispatch])
  return (
    <Container maxWidth={'xl'}>
      {flight_number}
    </Container>
  );
}
