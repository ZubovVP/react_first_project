import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className={s.header}>
        <img src='./../../logo192.png'/>
        <div className={s.loginBlock}>
            <NavLink to={"/login"}>Login</NavLink>

        </div>
    </header>
}

export default Header;