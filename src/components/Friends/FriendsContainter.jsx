import React from "react";
import './Friends.module.css';
import StoreContext from "../../StoreContext";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Friends from "./Friends";

const FriendsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let dialogsElements = state.sidebar.friends.map(friend => <DialogItem name={friend.name} id={friend.id}/>);

                    return <Friends dialogsElements={dialogsElements}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default FriendsContainer;