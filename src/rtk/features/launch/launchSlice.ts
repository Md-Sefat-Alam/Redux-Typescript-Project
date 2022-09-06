import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLaunch } from './launchAPI';

interface rocket {
    rocket_id: string,
    rocket_name: string,
}
interface launchSite {
    site_id: string,
    site_name: string,
    site_name_long: string
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

}

export interface LaunchesState {
    status: "loading" | "idle" | "failed",
    value: LaunchesFetchModel,
}


const initialState: LaunchesState = {
    status: 'idle',
    value: {
        flight_number: 0,
        launch_date_local: '',
        launch_date_unix: 0,
        launch_date_utc: "",
        launch_site: {
            site_id: '',
            site_name: '',
            site_name_long: ""
        },
        launch_success: true,
        launch_year: '',
        mission_name: "",
        rocket: {
            rocket_id: '',
            rocket_name: ""
        }
    },
};

export const fetchALaunch = createAsyncThunk(
    'launch/fetchLaunch',
    async (id: number | string) => {
        const response = await fetchLaunch(id);
        return response;
    }
);

export const launchSlice = createSlice({
    name: 'launch',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchALaunch.pending, (state) => {
                state.status = 'loading';
                state.value = initialState.value;
            })
            .addCase(fetchALaunch.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(fetchALaunch.rejected, (state) => {
                state.status = 'failed';
                state.value = initialState.value;
            });
    },
});


export default launchSlice.reducer;
