const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, text: 'Hi. how are you?', likesCount: 10},
        {id: 2, text: 'It\'s my first post', likesCount: 15},
    ],
    newPostText: 'Hello'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                text: state.newPostText,
                likesCount: 0
            };
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state};
            newState.newPostText = action.newText;
            return newState;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;