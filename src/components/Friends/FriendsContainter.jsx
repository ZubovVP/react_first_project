import React from "react";
import './Friends.module.css';
import Friends from "./Friends";
import {connect} from "react-redux";
import FriendItem from "./FriendItem/FriendItem";

let mapStateToProps = (state) => {
    let dialogsElements = state.sidebar.friends.map(friend => <FriendItem name={friend.name}
                                                                          key={friend.id}/>);
    return {
        dialogsElements: dialogsElements
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;