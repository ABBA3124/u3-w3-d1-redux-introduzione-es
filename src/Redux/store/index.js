import { createSlice, configureStore } from "@reduxjs/toolkit";


const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchJobsPending(state) {
      state.status = "loading";
    },
    fetchJobsFulfilled(state, action) {
      state.status = "succeeded";
      state.jobs = action.payload;
    },
    fetchJobsRejected(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite(state, action) {
      state.push(action.payload);
    },
    removeFavorite(state, action) {
      return state.filter((fav) => fav !== action.payload);
    },
  },
});


const rootReducer = {
  jobs: jobsSlice.reducer,
  favorites: favoritesSlice.reducer,
};


const store = configureStore({
  reducer: rootReducer,
});


export default store;


export const { fetchJobsPending, fetchJobsFulfilled, fetchJobsRejected } = jobsSlice.actions;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
