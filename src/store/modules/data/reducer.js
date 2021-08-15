const initialState = {
  api_data: {},
  loaded: false,
  loading: false,
  success: null,
};

export function data(state = initialState, action) {
  switch (action.type) {
    case '@data/GET_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '@data/GET_FAILURE':
      return {
        ...state,
        api_data: null,
        loaded: true,
        loading: false,
        success: false,
      };
    case '@data/GET_SUCCESS':
      return {
        ...state,
        api_data: action.payload,
        loaded: true,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
}
