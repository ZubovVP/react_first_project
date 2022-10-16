import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";

const Navbar = (props) => {
    let dialogsElements = props.state.map(friend => <DialogItem name={friend.name} id={friend.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink>
            </div>
            <div className={s.friendsBlock}>
                <div>
                    <div className={s.friends}>
                        <NavLink to="/friends"
                                 className={navData => navData.isActive ? s.active : s.friends}>Friends</NavLink>
                    </div>
                    <div className={s.friendsLogo}>
                        {dialogsElements}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;