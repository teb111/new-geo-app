import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/authConstants";
import { BASE_API_URL } from "../constants/constants";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const device = {
      deviceToken: "hgfhhfhfhfhfhfhhf",
      deviceOs: "IOS",
      deviceOsVersion: "14.2",
      deviceName: "Iphone 12 pro",
    };

    console.log(email, password, device);

    // getting our response as we set it in our userController in the backend
    const { data } = await axios.post(
      `${BASE_API_URL}/business/login`,
      { email, password, device },
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: LOGIN_FAILURE,
      payload: error?.response?.data,
    });
  }
};

export const registerUser = (reqBody) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const device = {
      deviceToken: "hgfhhfhfhfhfhfhhf",
      deviceOs: "IOS",
      deviceOsVersion: "14.2",
      deviceName: "Iphone 12 pro",
    };

    // getting our response as we set it in our userController in the backend
    const { data } = await axios.post(
      `${BASE_API_URL}/business/register`,
      { ...reqBody, device },
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: REGISTER_FAILURE,
      payload: error?.response?.data,
    });
  }
};
