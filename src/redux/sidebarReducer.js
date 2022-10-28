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
        case ADD_NEW_FRIEND:
            let name = state.name;
            state.friends.push({id: 9, name: name});
            return state;

        case UPDATE_FRIEND:
            let username = state.name;
            let id = state.id;
            for (let i = 0; i < state.length; i++) {
                if (state.friends[i].id === id) {
                    state.friends[i].name = username;
                    return state;
                }
            }
            return state;

        default:
            return state;
    }
}

export const addSidebarFriendCreator = () => ({type: ADD_NEW_FRIEND});
export const updateSidebarFriendCreator = () => ({type: UPDATE_FRIEND});
export default sidebarReducer;
