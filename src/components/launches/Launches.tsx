import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LaunchCard from '../util/LaunchCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector, useAppDispatch } from '../../rtk/app/hooks';
import { fetchAllLaunches } from '../../rtk/features/launches/launchesSlice'
import moment from 'moment';


export interface ILaunchesProps {
}


export default function Launches(props: ILaunchesProps) {
  const dispatch = useAppDispatch()
  const launches = useAppSelector((state) => state.launches);
  const filters = useAppSelector((state) => state.filters);

  console.log(filters)

  React.useEffect(() => {
    dispatch(fetchAllLaunches())
  }, [dispatch])

  if (launches.status === 'loading') {
    return <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  }

  return (
    <Grid container rowSpacing={2} gap={'15px'} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
      {
        launches.value
          .filter(f => f.rocket.rocket_name.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase()))
          .filter(f => {
            switch (filters.date) {
              case 'all':
                return f;
              case 'lastWeek':
                const todayDate = new Date()
                const startDayOfPrevWeek = moment(todayDate).subtract(1, 'week').startOf('week').format('LLLL')
                const lastDayOfPrevWeek = moment(todayDate).subtract(1, 'week').endOf('week').format('LLLL')
                if (moment(f.launch_date_utc).isBetween(startDayOfPrevWeek, lastDayOfPrevWeek)) {
                  return f;
                } else return;
              case 'lastMonth':
                const todayDateForMonth = new Date()
                const startDayOfPrevMonth = moment(todayDateForMonth).subtract(1, 'month').startOf('month').format('LLLL')
                const lastDayOfPrevMonth = moment(todayDateForMonth).subtract(1, 'month').endOf('month').format('LLLL')
                if (moment(f.launch_date_utc).isBetween(startDayOfPrevMonth, lastDayOfPrevMonth)) {
                  return f;
                } else return;
              case 'lastYear':
                const todayDateForYear = new Date()
                const startDayOfPrevYear = moment(todayDateForYear).subtract(1, 'month').startOf('month').format('LLLL')
                const lastDayOfPrevYear = moment(todayDateForYear).subtract(1, 'month').endOf('month').format('LLLL')
                if (moment(f.launch_date_utc).isBetween(startDayOfPrevYear, lastDayOfPrevYear)) {
                  return f;
                } else return;

              default:
                return f;
            }
          })
          .filter(f => {
            if (filters.launchStatus !== 'all') {
              if (f.launch_success === filters.launchStatus) {
                return f;
              }
            } else {
              return f;
            }
          })
          .filter(f => {
            if (filters.upcoming !== 'all') {
              if (f.upcoming == filters.upcoming) {
                return f;
              }
            } else {
              return f;
            }
          })
          .map((launch, index) => <Grid key={index} item xs={2}><LaunchCard launch={launch} /></Grid>)
      }
    </Grid>
  );
}


