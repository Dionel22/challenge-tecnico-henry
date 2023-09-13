import axios from "axios";

export const GETFORMS = "GETFORMS";
export const IDFORMS = "IDFORMS";
export const PUTFORMS = "PUTFORMS";
export const POSTFORMS = "POSTFORMS";

export const getForms = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://servidor-google-form.onrender.com/form");
      console.log(response.data);
      return dispatch({
        type: GETFORMS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const idForms = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://servidor-google-form.onrender.com/form/${id}`);
      console.log(response.data);
      return dispatch({
        type: IDFORMS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const putForms = (body) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`https://servidor-google-form.onrender.com/form`,body);
      console.log(response.data)
      return dispatch({
        type: PUTFORMS,
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
      const response = await axios.post(`https://servidor-google-form.onrender.com/form`,body);
      return dispatch({
        type: POSTFORMS,
        payload: response.data,
      });
    } catch (error) {
      return error.message;
    }
  };
};
