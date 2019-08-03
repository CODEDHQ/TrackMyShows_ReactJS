import * as actionTypes from "../actions/actionTypes";
import shows from "../../data";

const initialState = {
  shows: shows,
  filteredShows: shows
  //   loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_SHOWS:
      return {
        ...state,
        filteredShows: state.shows.filter(show => {
          return `${show.name}`.toLowerCase().includes(action.payload);
        })
      };
    default:
      return state;
  }
};

export default reducer;
