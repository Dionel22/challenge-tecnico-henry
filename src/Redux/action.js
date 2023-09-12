import axios from "axios";

export const GETFORMS = "GETFORMS";
export const PUTFORMS = "PUTFORMS";
export const POSTFORMS = "POSTFORMS";
export const POSTUSER = "POSTUSER";
export const POSTLOGIN = "POSTLOGIN";

export const getForms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/form");
      return dispatch({
        type: GETFORMS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const postForms = (body) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3001/form`,body);
      console.log(response.data)
      return dispatch({
        type: POSTFORMS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
