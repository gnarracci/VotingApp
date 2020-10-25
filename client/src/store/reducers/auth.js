import { SET_CURRENT_USERID } from "../actionTypes";

const DEFAULT_STATE = {
  isAuthenticated: false,
  userId: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USERID:
      return {
        isAuthenticated: !!Object.keys(action.userId).length,
        userId: action.userId,
      };
    default:
      return state;
  }
};
