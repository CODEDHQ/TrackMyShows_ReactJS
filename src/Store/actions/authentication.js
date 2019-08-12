import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setErrors } from "./errors";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const checkForExpiredToken = () => {
  return dispatch => {
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);

      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, history) => {
  return async dispatch => {
    try {
      let response = await instance.post("/signin/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
      history.push("/home");
    } catch (error) {
      //   console.log(error.response.data);
      dispatch(setErrors(error.response.data));
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      await instance.post("/signup/", userData);
    } catch (error) {
      //   console.log(error.response.data);
      dispatch(setErrors(error.response.data));
    }
    dispatch(login(userData, history));
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};
