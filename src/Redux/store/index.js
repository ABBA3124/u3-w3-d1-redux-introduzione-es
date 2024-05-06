import { createSlice, configureStore } from "@reduxjs/toolkit";

// Definizione dello slice per il reducer jobs
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

// Definizione dello slice per il reducer favorites
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

// Combina i reducer utilizzando combineReducers
const rootReducer = {
  jobs: jobsSlice.reducer,
  favorites: favoritesSlice.reducer,
};

// Crea lo store utilizzando configureStore e passa i reducer combinati
const store = configureStore({
  reducer: rootReducer,
});

// Export dello store
export default store;

// Export delle azioni per utilizzarle nei componenti
export const { fetchJobsPending, fetchJobsFulfilled, fetchJobsRejected } = jobsSlice.actions;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
