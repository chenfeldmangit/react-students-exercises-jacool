class UserActions {

    static signUp = (userName) => {
        return {
            type: UserActions.SIGN_UP,
            userName: userName
        }
    };

    static login = (userName) => {
        return {
            type: UserActions.LOGIN,
            userName: userName
        }
    };


    static logout = () => {
        return {
            type: UserActions.LOGOUT
        }
    };
}

UserActions.LOGOUT = "LOGOUT";
UserActions.LOGIN = "LOGIN";
UserActions.SIGN_UP = "SIGN_UP";

export default UserActions;




