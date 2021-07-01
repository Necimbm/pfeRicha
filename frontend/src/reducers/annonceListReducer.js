const {
    ANNONCE_LIST_REQUEST,
    ANNONCE_LIST_SUCCESS,
    ANNONCE_LIST_FAIL,
    ANNONCE_DETAILS_REQUEST,
    ANNONCE_DETAILS_SUCCESS,
    ANNONCE_DETAILS_FAIL,
    ANNONCE_CREATE_REQUEST,
    ANNONCE_CREATE_SUCCESS,
    ANNONCE_CREATE_FAIL,
    ANNONCE_CREATE_RESET,
    ANNONCE_UPDATE_REQUEST,
    ANNONCE_UPDATE_SUCCESS,
    ANNONCE_UPDATE_FAIL,
    ANNONCE_UPDATE_RESET,
    ANNONCE_DELETE_REQUEST,
    ANNONCE_DELETE_SUCCESS,
    ANNONCE_DELETE_FAIL,
    ANNONCE_DELETE_RESET,
    ANNONCE_CATEGORY_LIST_REQUEST,
    ANNONCE_CATEGORY_LIST_SUCCESS,
    ANNONCE_CATEGORY_LIST_FAIL,
    ANNONCE_REVIEW_CREATE_REQUEST,
    ANNONCE_REVIEW_CREATE_SUCCESS,
    ANNONCE_REVIEW_CREATE_FAIL,
    ANNONCE_REVIEW_CREATE_RESET,
  } = require('../constants/annoncesConstants');
  
  export const annonceListReducer = (
    state = { loading: true, ANNONCEs: [] },
    action
  ) => {
    switch (action.type) {
      case ANNONCE_LIST_REQUEST:
        return { loading: true };
      case ANNONCE_LIST_SUCCESS:
        return {
          loading: false,
          annonce: action.payload
        };
      case ANNONCE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const annonceCategoryListReducer = (
    state = { loading: true, ANNONCEs: [] },
    action
  ) => {
    switch (action.type) {
      case ANNONCE_CATEGORY_LIST_REQUEST:
        return { loading: true };
      case ANNONCE_CATEGORY_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case ANNONCE_CATEGORY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const annonceDetailsReducer = (state = { ANNONCE:{}, loading: true }, action) => {
    switch (action.type) {
      case ANNONCE_DETAILS_REQUEST:
        return { loading: true };
      case ANNONCE_DETAILS_SUCCESS:
        return { loading: false, ANNONCE: action.payload };
      case ANNONCE_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const annonceCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ANNONCE_CREATE_REQUEST:
        return { loading: true };
      case ANNONCE_CREATE_SUCCESS:
        return { loading: false, success: true, ANNONCE: action.payload };
      case ANNONCE_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ANNONCE_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const annonceUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case ANNONCE_UPDATE_REQUEST:
        return { loading: true };
      case ANNONCE_UPDATE_SUCCESS:
        return { loading: false, success: true };
      case ANNONCE_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ANNONCE_UPDATE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const annonceDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ANNONCE_DELETE_REQUEST:
        return { loading: true };
      case ANNONCE_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ANNONCE_DELETE_FAIL:
        return { loading: false, error: action.payload };
      case ANNONCE_DELETE_RESET:
        return {};
      default:
        return state;
    }
  };
  export const annonceReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ANNONCE_REVIEW_CREATE_REQUEST:
        return { loading: true };
      case ANNONCE_REVIEW_CREATE_SUCCESS:
        return { loading: false, success: true, review: action.payload };
      case ANNONCE_REVIEW_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ANNONCE_REVIEW_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };