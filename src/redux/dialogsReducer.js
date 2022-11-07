const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initianalState = {
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

};

const dialogsReducer = (state = initianalState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let newState = {...state};
            newState.newMessageBody = action.body;
            return newState;
        }

        case SEND_MESSAGE: {
            let newState = {...state};
            let body = newState.newMessageBody;
            newState.newMessageBody = '';
            newState.messages.push({id: 9, text: body});
            return newState;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: text
});

export default dialogsReducer;