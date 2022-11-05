import React from "react";
import './Friends.module.css';
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    let dialogsElements = state.sidebar.friends.map(friend => <DialogItem name={friend.name}
                                                                          id={friend.id}/>);
    return {
        dialogsElements: dialogsElements
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;