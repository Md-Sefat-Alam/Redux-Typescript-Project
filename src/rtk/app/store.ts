import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import launchesReducer from '../features/launches/launchesSlice';
import launchReducer from '../features/launch/launchSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    launches: launchesReducer,
    launch: launchReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
