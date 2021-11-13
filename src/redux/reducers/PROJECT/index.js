import * as actionTypes from "./../../constants/projectConstants";

const initialState = {
  projects: {},
};

export const getProjectsReduser = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PROJECTS_REQUEST:
      return {
        loading: true,
        projects: [],
      };
    case actionTypes.GET_ALL_PROJECTS_SUCCESS:
      return {
        loading: false,
        projects: action.payload,
      };
    case actionTypes.GET_ALL_PROJECTS_FAIL:
      return {
        loading: false,
        error: action.payLoad,
      };
    default:
      return state;
  }
};
