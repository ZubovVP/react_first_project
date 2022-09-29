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

let dialogsData = [
    {id: 1, name: 'Duke'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'River'},
    {id: 5, name: 'Vitaly'},
    {id: 6, name: 'Valera'}
];

let messagesData = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Yo'},
];


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].text}/>
                <Message message={messagesData[1].text}/>
                <Message message={messagesData[2].text}/>
            </div>
        </div>
    );
}

export default Dialogs;