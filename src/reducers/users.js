import { REQUEST_USER, CREATE_USER_SUCCESS, GET_ALL_USERS_SUCCESS } from 'actions/constants';

export const defaultState = {
  data: [{
    key: '1',
    name: {
      text: 'John Brown',
      avatar: '',
    },
    create: 1229274074002,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: {
      text: 'Jim Green',
      avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
    },
    create: 1529274074002,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: {
      text: 'Moe Black',
      avatar: '',
    },
    create: 1329274076002,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: {
      text: 'Jim Red',
      avatar: '',
    },
    create: 1529274075002,
    address: 'London No. 2 Lake Park',
  }],
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
          ...state,
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

