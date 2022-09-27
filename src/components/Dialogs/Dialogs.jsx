import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Duke</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Kate</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">River</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Vitaly</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you></div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;