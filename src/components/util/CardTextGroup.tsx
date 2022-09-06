import * as React from 'react';
import Typography from '@mui/material/Typography';

export interface ICardTextGroupProps {
    title:string,
    text: string,
    styles?: {} 
}

export default function CardTextGroup (props: ICardTextGroupProps) {
    const {title, text, styles} = props;
  return (
    <Typography component="p" sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '12px', color: 'GrayText' }} component="span">
              {title}:
            </Typography>
            <Typography component="span" sx={{ fontWeight: 'bold', ...styles }}>
              {text}
            </Typography>
          </Typography>
  );
}
