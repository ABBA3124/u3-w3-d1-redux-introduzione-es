import { combineReducers } from "redux";

const initialState = {
  jobs: [],
  favorites: [], 
  status: "idle",
  error: null,
};

function jobsReducer(state = initialState, action) {
  switch (action.type) {
    case "jobs/fetchJobs/pending":
      return { ...state, status: "loading" };
    case "jobs/fetchJobs/fulfilled":
      return { ...state, status: "succeeded", jobs: action.payload };
    case "jobs/fetchJobs/rejected":
      return { ...state, status: "failed", error: action.error };
    case "favorites/add":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "favorites/remove":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
