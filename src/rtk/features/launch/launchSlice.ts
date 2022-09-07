import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
interface linksModel {
    mission_patch: string | null,
    mission_patch_small: string | null,
    reddit_campaign: string | null,
    reddit_launch: string | null,
    reddit_recovery: string | null,
    reddit_media: string | null,
    presskit: string | null,
    article_link: string | null,
    wikipedia: string | null,
    video_link: string | null,
    youtube_id: string | null,
    flickr_images: []
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
    details: string,
    links: linksModel
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
        },
        details: '',
        links: {
            mission_patch: null,
            mission_patch_small: null,
            reddit_campaign: null,
            reddit_launch: null,
            reddit_recovery: null,
            reddit_media: null,
            presskit: null,
            article_link: null,
            wikipedia: null,
            video_link: null,
            youtube_id: null,
            flickr_images: []
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
