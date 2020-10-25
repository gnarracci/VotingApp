import { addError, removeError } from "./error";
import { SET_CURRENT_USERID } from "../actionTypes";
import api from "../../service/api";

export const setCurrentUserId = (userId) => ({
  type: SET_CURRENT_USERID,
  userId,
});

export const setToken = (token) => {
  api.setToken(token);
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    api.setToken(null);
    dispatch(setCurrentUserId({}));
    dispatch(removeError());
  };
};

export const authUser = (path, data) => {
  return async (dispatch) => {
    try {
      const { token, ...userId } = await api.call("post", `auth/${path}`, data);
      localStorage.setItem("jwtToken", token);
      api.setToken(token);
      dispatch(setCurrentUserId(userId));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
