import { Container } from '@mui/material';
import * as React from 'react';
import Launches from '../../components/launches/Launches';
import Filters from '../../components/filters/Filters';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <Container maxWidth={'xl'}>
      <Filters/>
      <Launches/>
    </Container>
  );
}
