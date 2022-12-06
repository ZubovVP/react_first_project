const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_DATA_PHOTO = 'SET_USER_DATA_PHOTO';

let initialState = {
    userId: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_USER_DATA_PHOTO:
            return {
                ...state,
                ...action.data.photo
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const setAuthUserDataPhoto = (photo) => ({type: SET_USER_DATA, data: {photo}})


export default authReducer;