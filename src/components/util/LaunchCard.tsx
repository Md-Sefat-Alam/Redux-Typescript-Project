import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardTextGroup from './CardTextGroup';


export default function LaunchCard() {
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }} >
          <CardTextGroup title='Flight' text='1'/>
          {/* end flight id */}
          <CardTextGroup title='Date' text={new Date().toLocaleDateString()}/>
          {/* end flight date */}
        </Box>
        <CardTextGroup title='Mission' text='DSCOVR'/>
        <CardTextGroup title='Rocket' text='Falcon 9'/>
        
        <CardTextGroup title='Site' text='CCAFS SLC 40'/>
        <CardTextGroup title='Launch Status' text={true?'Success':'Faild'} styles={true?{fontSize: '12px',border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'green', color: 'white'}:{fontSize: '12px',border: 'none', padding: '2px 5px', borderRadius: '5px', backgroundColor: 'red', color: 'white'}}/>
      </CardContent>
    </Card>
  );
}
