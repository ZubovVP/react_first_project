import React from "react";
import './Friends.module.css';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friendsLogo}>
            {props.dialogsElements}
        </div>
    );
}

export default Friends;