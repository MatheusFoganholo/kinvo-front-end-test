const initialState = {
  api_data: {},
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
        loading: false,
        success: false,
      };
    case '@data/GET_SUCCESS':
      return {
        ...state,
        api_data: action.payload,
        loading: false,
        success: true,
      };
    default:
      return state;
  }
}
