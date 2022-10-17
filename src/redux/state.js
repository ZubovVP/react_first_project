let store = {
    _state: {
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
            _dialogs: [
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
    },
    getState(){
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },

    addPost() {
        let newPost = {
            id: 3,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._state._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._state._callSubscriber(this._state);
    },

    getPosts() {
        return store._state.profilePage.posts;
    },
    getNewPostsInfo() {
        return store._state.newPostText;
    },
    setNewPostsInfo(text) {
        this.store._state.newPostText = text;
    },

    subscribe(observer) {
        this._state._callSubscriber = observer;  //паттерн наблюдатель (observer)
    },

    getMessages() {
        return this._state.messagesPage.messages;
    },
    addMessages(text) {
        this._state.messagesPage.messages.push(9, text);
    },

    getDialogs() {
        return this._state.messagesPage._dialogs;
    },
    addDialogs(text) {
        this._state.messagesPage.messages.push(9, text);
    },

    getSidebar() {
        return this._state.sidebar.friends;
    }
}
export default store;
window.store = store;
