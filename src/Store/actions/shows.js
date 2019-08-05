import * as actionTypes from "./actionTypes";

export const filterShows = query => {
  return {
    type: actionTypes.FILTER_SHOWS,
    payload: query
  };
};

export const getShowDetail = showID => {
  return {
    type: actionTypes.GET_SHOW_DETAIL,
    payload: showID
  };
};
