import * as actionTypes from "./actionTypes";

export const filterShows = query => {
  return {
    type: actionTypes.FILTER_SHOWS,
    payload: query
  };
};
