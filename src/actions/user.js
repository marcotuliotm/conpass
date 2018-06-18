import { REQUEST_USER, CREATE_USER_SUCCESS } from './constants';


const saveUserSuccess = (user) => ({
  type: CREATE_USER_SUCCESS,
  user,
});


const requestUser = () => ({
  type: REQUEST_USER,
});


export class UserAction {
  static saveUser = (user) => (dispatch) => {
    dispatch(requestUser());
    setTimeout(() => {
      dispatch(saveUserSuccess(user));
    }, 100);
  };
}

export default UserAction;
