import Axios from 'axios';
import {
  ANNONCE_CREATE_FAIL,
  ANNONCE_CREATE_REQUEST,
  ANNONCE_CREATE_SUCCESS,
  ANNONCE_DETAILS_FAIL,
  ANNONCE_DETAILS_REQUEST,
  ANNONCE_DETAILS_SUCCESS,
  ANNONCE_LIST_FAIL,
  ANNONCE_LIST_REQUEST,
  ANNONCE_LIST_SUCCESS,
  ANNONCE_UPDATE_REQUEST,
  ANNONCE_UPDATE_SUCCESS,
  ANNONCE_UPDATE_FAIL,
  ANNONCE_DELETE_REQUEST,
  ANNONCE_DELETE_FAIL,
  ANNONCE_DELETE_SUCCESS,
  ANNONCE_CATEGORY_LIST_SUCCESS,
  ANNONCE_CATEGORY_LIST_REQUEST,
  ANNONCE_CATEGORY_LIST_FAIL,
  ANNONCE_REVIEW_CREATE_REQUEST,
  ANNONCE_REVIEW_CREATE_SUCCESS,
  ANNONCE_REVIEW_CREATE_FAIL,
} from '../constants/annoncesConstants';

export const listannonces = () => async (dispatch) => {
  dispatch({
    type: ANNONCE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/materials`);
    dispatch({ type: ANNONCE_LIST_SUCCESS, payload: data});
    localStorage.setItem("AnnoncesList",JSON.stringify(data));
  } catch (error) {
    dispatch({ type: ANNONCE_LIST_FAIL, payload: error.message });
  }
};

export const listannoncesategories = () => async (dispatch) => {
  dispatch({
    type: ANNONCE_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/materials/categories`);
    dispatch({ type: ANNONCE_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ANNONCE_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsANNONCE = (ANNONCEId) => async (dispatch) => {
  dispatch({ type: ANNONCE_DETAILS_REQUEST, payload: ANNONCEId });
  try {
    const { data } = await Axios.get(`/api/material/${ANNONCEId}`);
    dispatch({ type: ANNONCE_DETAILS_SUCCESS, payload: data });
     localStorage.setItem("ANNONCEsList",JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ANNONCE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createAnnonce = (formData) => async (dispatch, getState) => {
  dispatch({ type: ANNONCE_CREATE_REQUEST, paylod: formData });
  try {
  

    const { data } = await Axios.post(
      '/api/addmat',
      formData

    );
    dispatch({
      type: ANNONCE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ANNONCE_CREATE_FAIL, payload: message });
  }
};
export const updateannonce = (ANNONCE) => async (dispatch, getState) => {
  dispatch({ type: ANNONCE_UPDATE_REQUEST, payload: ANNONCE });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/api/ANNONCEs/${ANNONCE._id}`, ANNONCE, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: ANNONCE_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ANNONCE_UPDATE_FAIL, error: message });
  }
};
export const deleteannonce = (ANNONCEId) => async (dispatch, getState) => {
  dispatch({ type: ANNONCE_DELETE_REQUEST, payload: ANNONCEId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/api/delmat/${ANNONCEId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
    },
    });
    dispatch({ type: ANNONCE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ANNONCE_DELETE_FAIL, payload: message });
  }
};
export const createReview = (ANNONCEId, review) => async (
  dispatch,
  getState
) => {
  dispatch({ type: ANNONCE_REVIEW_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      `/api/ANNONCEs/${ANNONCEId}/reviews`,
      review,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: ANNONCE_REVIEW_CREATE_SUCCESS,
      payload: data.review,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ANNONCE_REVIEW_CREATE_FAIL, payload: message });
  }
};