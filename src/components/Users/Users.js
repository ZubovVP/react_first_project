import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../asserts/images/user.webp";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {profileAPI} from "../../api/api";
import {toggleIsFollowingProgress} from "../../redux/usersReducer";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.toggleIsFollowingProgress} onClick={() => {
                                props.toggleIsFollowingProgress(true);
                                profileAPI.unfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false);
                                    });
                            }}>Unfollow</button>
                            : <button disabled={props.toggleIsFollowingProgress} onClick={() => {
                                props.toggleIsFollowingProgress(true);
                                profileAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                        props.toggleIsFollowingProgress(false);
                                    });
                            }}>Follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{"u.location.counter"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;