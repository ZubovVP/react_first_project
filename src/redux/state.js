let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hi. how are you?', likesCount: 10},
            {id: 2, text: 'It\'s my first post', likesCount: 15},
        ]
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

export default state;