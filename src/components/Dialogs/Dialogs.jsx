import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogs = [
    {id: 1, name: 'Duke'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'River'},
    {id: 5, name: 'Vitaly'},
    {id: 6, name: 'Valera'}
];

let messages = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Yo'},
];

let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
let messagesElements = messages.map(message => <Message message={message.text}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;