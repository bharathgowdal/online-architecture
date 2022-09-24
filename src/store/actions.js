import {
  SIGN_UP,
  SIGN_IN,
  LOADING,
  LOGOUT,
  FETCH_USER,
  POST_QUERY,
} from "./types";
// import { fetchAllData } from "../api/userAPI";

export const loading = (flag) => ({ type: LOADING, flag });

export const getUserData = (userData) => ({
  type: FETCH_USER,
  userData,
});

// export const getUserDataError = (error) => ({
//   type: FETCH_USER_DATA_ERROR,
//   error,
// });

export const getData = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    // const { data } = await fetchAllData();
    // dispatch(getUserData(data));
    dispatch(loading(false));
  } catch (err) {
    console.log(err);
    // dispatch(getUserDataError(err));
  }
};

export const logout = () => ({ type: LOGOUT });
