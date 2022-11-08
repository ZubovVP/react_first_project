const ADD_NEW_FRIEND = 'ADD-FRIEND';
const UPDATE_FRIEND = 'UPDATE-FRIEND';

const initialState = {
    friends: [
        {id: 1, name: 'Duke'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Kate'}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_FRIEND: {
            let name = state.name;
           return  {...state,
                friends : [...state, {id: 9, name: name}]
            }
        }

        case UPDATE_FRIEND: {
            let username = state.name;
            let id = state.id;
            let newState = {...state}
            for (let i = 0; i < newState.length; i++) {
                if (newState.friends[i].id === id) {
                    newState.friends[i].name = username;
                    return state;
                }
            }
            return newState;
        }
        default:
            return state;
    }
}

export const addSidebarFriendCreator = () => ({type: ADD_NEW_FRIEND});
export const updateSidebarFriendCreator = () => ({type: UPDATE_FRIEND});
export default sidebarReducer;
