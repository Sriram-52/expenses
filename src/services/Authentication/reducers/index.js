import ACTIONS from '../actions';

const initialState = {
  signin: { loading: false, data: {}, error: null },
  signout: { loading: false, data: {}, error: null },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SIGNIN_REQ:
      return {
        ...state,
        signin: {
          ...state.signin,
          loading: true,
          error: null,
        },
      };

    case ACTIONS.SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          ...state.signin,
          loading: false,
          data: {
            user: payload,
          },
        },
      };

    case ACTIONS.SIGNIN_FAILURE:
      return {
        ...state,
        signin: {
          ...state.signin,
          loading: false,
          error: payload,
        },
      };

    case ACTIONS.SIGNOUT_REQ:
      return {
        ...state,
        signout: {
          ...state.signin,
          loading: true,
          error: null,
        },
      };

    case ACTIONS.SIGNOUT_SUCCESS:
      return {
        ...state,
        signout: {
          ...state.signin,
          loading: false,
        },
      };

    case ACTIONS.SIGNOUT_FAILURE:
      return {
        ...state,
        signout: {
          ...state.signin,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
