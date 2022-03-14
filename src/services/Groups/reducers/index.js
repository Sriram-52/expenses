import ACTIONS from '../actions';

const initialState = {
  createGroup: { loading: true, data: {}, error: null },
  groupList: { loading: true, data: {}, error: null },
  allUsers: { loading: true, data: {}, error: null },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.CREATE_GROUP_REQ:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: true,
        },
      };

    case ACTIONS.CREATE_GROUP_SUCCESS:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          data: payload,
        },
      };

    case ACTIONS.CREATE_GROUP_FAILURE:
      return {
        ...state,
        createGroup: {
          ...state.createGroup,
          loading: false,
          error: payload,
        },
      };

    case ACTIONS.GROUP_LIST_REQ:
      return {
        ...state,
        groupList: {
          ...state.groupList,
          loading: true,
        },
      };

    case ACTIONS.GROUP_LIST_SUCCESS:
      return {
        ...state,
        groupList: {
          ...state.groupList,
          loading: false,
          data: payload,
        },
      };

    case ACTIONS.GROUP_LIST_FAILURE:
      return {
        ...state,
        groupList: {
          ...state.groupList,
          loading: false,
          error: payload,
        },
      };

    case ACTIONS.GET_ALL_USERS_REQ:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          loading: true,
        },
      };

    case ACTIONS.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          loading: false,
          data: payload,
        },
      };

    case ACTIONS.GET_ALL_USERS_FAILIURE:
      return {
        ...state,
        allUsers: {
          ...state.allUsers,
          loading: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
