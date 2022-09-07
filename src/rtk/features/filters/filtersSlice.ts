import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface filtersState {
    search:string
    date: "lastWeek"|"lastMonth"|"lastYear"|"all",
    launchStatus:boolean|"all",
    upcoming:boolean|"all"
}


const initialState: filtersState = {
    search:'',
    date:'all',
    launchStatus: "all",
    upcoming:"all"
};


export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        search:(state,action:PayloadAction<string>)=>{
            state.search = action.payload
        },
        byDate:(state,action:PayloadAction<"lastWeek"|"lastMonth"|"lastYear"|"all">)=>{
            state.date = action.payload
        },
        byLaunchStatus:(state,action:PayloadAction<boolean|"all">)=>{
            state.launchStatus = action.payload
        },
        byupcoming:(state,action:PayloadAction<boolean|"all">)=>{
            state.upcoming = action.payload
        },
    },
});

export const {search,byDate,byLaunchStatus,byupcoming} = filtersSlice.actions

export default filtersSlice.reducer;

