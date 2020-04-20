import UserActions from "../actions/UserActions"

export const userReducer = function(state = { loggedInUser: null }, action) {
    switch (action.type) {
        case UserActions.LOGOUT:
            return { loggedInUser: null };
        case UserActions.LOGIN:
            return { loggedInUser: action.userName };
        case UserActions.SIGN_UP:
            return { loggedInUser: action.userName };
        default:
            return state;

    }
};
