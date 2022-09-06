import { Container } from '@mui/material';
import * as React from 'react';
import Launches from '../../components/launches/Launches';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <Container maxWidth={'xl'}>
      <Launches/>
    </Container>
  );
}
