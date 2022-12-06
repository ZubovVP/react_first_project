import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../asserts/images/user.webp";
import styles from "./Header.module.css";
import React from "react";

const Header = (props) => {
    return <header className={s.header}>
        <img src='./../../logo192.png'/>
        <div className={s.loginBlock}>
            <div className={styles.small}>
                <img src={props.photo != null ? props.photo : userPhoto}/>
            </div>
            <div>
                {
                    props.isAuth ? props.login :
                        <NavLink to={"/login"}>
                            Login
                        </NavLink>
                }
            </div>
        </div>
    </header>
}

export default Header;