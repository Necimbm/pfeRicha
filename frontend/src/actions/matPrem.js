import Axios from 'axios';
import {
  MATPROD_CREATE_FAIL,
  MATPROD_CREATE_REQUEST,
  MATPROD_CREATE_SUCCESS,
  MATPROD_DETAILS_FAIL,
  MATPROD_DETAILS_REQUEST,
  MATPROD_DETAILS_SUCCESS,
  MATPROD_LIST_FAIL,
  MATPROD_LIST_REQUEST,
  MATPROD_LIST_SUCCESS,
  MATPROD_UPDATE_REQUEST,
  MATPROD_UPDATE_SUCCESS,
  MATPROD_UPDATE_FAIL,
  MATPROD_DELETE_REQUEST,
  MATPROD_DELETE_FAIL,
  MATPROD_DELETE_SUCCESS,
  MATPROD_CATEGORY_LIST_SUCCESS,
  MATPROD_CATEGORY_LIST_REQUEST,
  MATPROD_CATEGORY_LIST_FAIL,
  MATPROD_REVIEW_CREATE_REQUEST,
  MATPROD_REVIEW_CREATE_SUCCESS,
  MATPROD_REVIEW_CREATE_FAIL,
} from '../constants/matprodConstants';

export const listmatprod = () => async (dispatch) => {
  dispatch({
    type: MATPROD_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/materialsProd`);
    dispatch({ type: MATPROD_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MATPROD_LIST_FAIL, payload: error.message });
  }
};

export const listProductCategories = () => async (dispatch) => {
  dispatch({
    type: MATPROD_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`/api/products/categories`);
    dispatch({ type: MATPROD_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MATPROD_CATEGORY_LIST_FAIL, payload: error.message });
  }
};
