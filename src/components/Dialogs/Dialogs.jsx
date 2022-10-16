import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.map(message => <Message message={message.text}/>);
    let newAnswerElement = React.createRef();

    let addAnswer = () => {
        alert(newAnswerElement.current.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <br/>
            <div>
                <textarea ref={newAnswerElement}></textarea>
                <br/>
                <button onClick={addAnswer}>Add answer</button>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Dialogs;