import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            newMessageBody: "",
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
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._state._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getPosts() {
        return store._state.profilePage.posts;
    },
    getNewPostsInfo() {
        return store._state.profilePage.newPostText;
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


