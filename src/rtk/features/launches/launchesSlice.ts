import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLaunches } from './launchesAPI';

interface rocket{
        rocket_id:string,
        rocket_name:string,
}
interface launchSite{
    site_id:string,
    site_name:string,
    site_name_long:string
}

export interface LaunchesFetchModel {
    flight_number: number,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_date_local: string,
    mission_name: string,
    rocket: rocket,
    launch_site: launchSite,
    launch_success: boolean,
    upcoming:boolean,
  }

export interface LaunchesState {
    status: "loading" | "idle" | "failed",
    value:LaunchesFetchModel[],
}


const initialState: LaunchesState = {
    status: 'idle',
    value:[],
};

export const fetchAllLaunches = createAsyncThunk(
    'launches/fetchLaunches',
    async () => {
        const response = await fetchLaunches();
        return response;
    }
);

export const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllLaunches.pending, (state) => {
                state.status = 'loading';
                state.value=[]
            })
            .addCase(fetchAllLaunches.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(fetchAllLaunches.rejected, (state) => {
                state.status = 'failed';
                state.value=[]
            });
    },
});


export const selectLaunches = (state: RootState) => state.launches;

export default launchesSlice.reducer;
