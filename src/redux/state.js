let rerenderEntireTree = () => {
    console.log('state changed');
};
let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi. how are you?', likesCount: 10},
            {id: 2, text: 'It\'s my first post', likesCount: 15},
        ],
        newPostText: 'Hello'
    },

    messagesPage: {
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'Yo'},
            {id: 4, text: 'Hi'},
            {id: 5, text: 'How are you?'},
            {id: 6, text: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Duke'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Kate'},
            {id: 4, name: 'River'},
            {id: 5, name: 'Vitaly'},
            {id: 6, name: 'Valera'}
        ]
    },

    sidebar: {
        friends: [
            {id: 1, name: 'Duke'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Kate'}
        ]
    }

};

export const addPost = () => {
    let newPost = {
        id: 3,
        text: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(this.state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  //паттерн наблюдатель (observer)
};

export default state;