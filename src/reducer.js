


export const initialState = {
    loaderShow: false,
    loginModalShow: false,
    signupModalShow: false,
    isLogin: false,
    user: [],



};



function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.userDetail
            }
        case 'SET_LOGIN_STATUS':
            return {
                ...state,
                isLogin: action.status
            }
        case 'SET_LOGIN_MODAL':
            return {
                ...state,
                loginModalShow: action.status
            }
        case 'SET_SIGNUP_MODAL':
            return {
                ...state,
                signupModalShow: action.status
            }
        case 'SET_LOADER_STATUS':
            if (action.status === true) {
                document.body.style.overflow = 'hidden';
            }
            else {
                document.body.style.overflow = 'auto';
            }
            return {
                ...state,
                loaderShow: action.status
            }



        default:
            return state
    }
}

export default reducer;