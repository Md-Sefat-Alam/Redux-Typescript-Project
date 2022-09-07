import * as React from 'react';
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,

} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import { useAppDispatch } from '../../rtk/app/hooks';
import { byDate, byLaunchStatus, byupcoming, search } from '../../rtk/features/filters/filtersSlice';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export interface IFiltersProps {
}

export default function Filters(props: IFiltersProps) {
    const dispatch = useAppDispatch();
    const [dateFilter, setDateFilter] = React.useState("all");
    const [launchStatusFilter, setLaunchStatusFilter] = React.useState("all");
    const [launchUpcommingFilter, setLaunchUpcommingFilter] = React.useState("all");

    const handleChange = (event: SelectChangeEvent) => {
        setDateFilter(event.target.value as string);
        switch (event.target.value) {
            case "all":
                dispatch(byDate("all"))
                break;
            case "lastWeek":
                dispatch(byDate('lastWeek'))
                break;
            case "lastMonth":
                dispatch(byDate('lastMonth'))
                break;
            case "lastYear":
                dispatch(byDate('lastYear'))
                break;
            default:
                break;
        }
    };
    const handleChangeStatus = (event: SelectChangeEvent) => {
        setLaunchStatusFilter(event.target.value as string);
        switch (event.target.value) {
            case "all":
                dispatch(byLaunchStatus("all"))
                break;
            case "success":
                dispatch(byLaunchStatus(true))
                break;
            case "faild":
                dispatch(byLaunchStatus(false))
                break;
            default:
                break;
        }
    };
    const handleChangeUpcomming = (event: SelectChangeEvent) => {
        setLaunchUpcommingFilter(event.target.value as string);
        switch (event.target.value) {
            case "all":
                dispatch(byupcoming("all"))
                break;
            case "true":
                dispatch(byupcoming(true))
                break;
            case "false":
                dispatch(byupcoming(false))
                break;
            default:
                break;
        }
    };



    return (
        <Box sx={{ marginY: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}><FilterAltIcon/> <span>Filters:</span></Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'start', gap: '30px', flexGrow: '1' }} component={'div'}>
                <TextField label="Rocket Name..." onChange={(e) => { dispatch(search(e.target.value)) }} variant="outlined" size="small" />

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={dateFilter}
                            label="Date"
                            onChange={handleChange}
                            size="small"
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={'lastWeek'}>Last Week</MenuItem>
                            <MenuItem value={'lastMonth'}>Last Month</MenuItem>
                            <MenuItem value={'lastYear'}>Last Year</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label-status">Launch Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label-status"
                            id="demo-simple-select-status"
                            value={launchStatusFilter}
                            label="Launch Status"
                            onChange={handleChangeStatus}
                            size="small"
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"success"}>Success</MenuItem>
                            <MenuItem value={"faild"}>Faild</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label-status">Is Upcomming</InputLabel>
                        <Select
                            labelId="demo-simple-select-label-status"
                            id="demo-simple-select-status"
                            value={launchUpcommingFilter}
                            label="Launch Status"
                            onChange={handleChangeUpcomming}
                            size="small"
                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"true"}>True</MenuItem>
                            <MenuItem value={"false"}>False</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Typography>

        </Box>
    );
}
