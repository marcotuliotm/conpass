import { REQUEST_USER, CREATE_USER_SUCCESS, GET_ALL_USERS_SUCCESS } from 'actions/constants';

export const defaultState = {
  data: [],
  load: false,
};


const users = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return state;
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          action.user,
        ],
        load: false,
      };
    case REQUEST_USER:
      return {
        ...state,
        load: true,
      };
    default:
      return state;
  }
};

export default users;

