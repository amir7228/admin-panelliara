import * as actionTypes from "./../../../constants/projectConstants";
import axios from "axios";
import { BASE_URI } from "@utils";

//  ?priceas=asc&likes=desc
export const getProjects = (params) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ALL_PROJECTS_REQUEST });
    const { data } = await axios.get(params);

    dispatch({
      type: actionTypes.GET_ALL_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_ALL_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
