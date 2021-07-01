const {
    MATPROD_LIST_REQUEST,
    MATPROD_LIST_SUCCESS,
    MATPROD_LIST_FAIL,
    MATPROD_DETAILS_REQUEST,
    MATPROD_DETAILS_SUCCESS,
    MATPROD_DETAILS_FAIL,
    MATPROD_CREATE_REQUEST,
    MATPROD_CREATE_SUCCESS,
    MATPROD_CREATE_FAIL,
    MATPROD_CREATE_RESET,
    MATPROD_UPDATE_REQUEST,
    MATPROD_UPDATE_SUCCESS,
    MATPROD_UPDATE_FAIL,
    MATPROD_UPDATE_RESET,
    MATPROD_DELETE_REQUEST,
    MATPROD_DELETE_SUCCESS,
    MATPROD_DELETE_FAIL,
    MATPROD_DELETE_RESET,
    MATPROD_CATEGORY_LIST_REQUEST,
    MATPROD_CATEGORY_LIST_SUCCESS,
    MATPROD_CATEGORY_LIST_FAIL,
    MATPROD_REVIEW_CREATE_REQUEST,
    MATPROD_REVIEW_CREATE_SUCCESS,
    MATPROD_REVIEW_CREATE_FAIL,
    MATPROD_REVIEW_CREATE_RESET,
  } = require('../constants/matprodConstants');
  
  export const matprodListReducer = (
    state = { loading: true, MATPRODs: [] },
    action
  ) => {
    switch (action.type) {
      case MATPROD_LIST_REQUEST:
        return { loading: true };
      case MATPROD_LIST_SUCCESS:
        return {
          loading: false,
          MATPRODs: action.payload
        };
      case MATPROD_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const matprodCategoryListReducer = (
    state = { loading: true, MATPRODs: [] },
    action
  ) => {
    switch (action.type) {
      case MATPROD_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case MATPROD_CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case MATPROD_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const matprodDetailsReducer = (state = { MATPROD:{}, loading: true }, action) => {
    switch (action.type) {
      case MATPROD_DETAILS_REQUEST:
        return { loading: true };
      case MATPROD_DETAILS_SUCCESS:
        return { loading: false, MATPROD: action.payload };
      case MATPROD_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const matprodCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case MATPROD_CREATE_REQUEST:
        return { loading: true };
      case MATPROD_CREATE_SUCCESS:
        return { loading: false, success: true, MATPROD: action.payload };
      case MATPROD_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case MATPROD_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const matprodUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case MATPROD_UPDATE_REQUEST:
        return { loading: true };
      case MATPROD_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case MATPROD_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case MATPROD_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const matprodDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case MATPROD_DELETE_REQUEST:
        return { loading: true };
      case MATPROD_DELETE_SUCCESS:
        return { loading: false, success: true };
      case MATPROD_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case MATPROD_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const matprodReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case MATPROD_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case MATPROD_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case MATPROD_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case MATPROD_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };