// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACT } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_ACT:
    return {
      ...state,
      email: action.info.email,
    };
  default:
    return state;
  }
};

export default userReducer;
