const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:
        [
            // {
            //     id: 1,
            //     photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
            //     followed: false,
            //     fullName: 'Dmitry',
            //     status: 'I\'m a boss',
            //     location: {city: 'Minsk', country: 'Belarus'}
            // },
            // {
            //     id: 2,
            //     photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
            //     followed: true,
            //     fullName: 'Vitaly',
            //     status: 'I\'m a too',
            //     location: {city: 'Moscow', country: 'Russia'}
            // },
            // {
            //     id: 3,
            //     photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
            //     followed: false,
            //     fullName: 'Andrew',
            //     status: 'I\'m a too',
            //     location: {city: 'Kiev', country: 'Ukraine'}
            // }
        ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer;