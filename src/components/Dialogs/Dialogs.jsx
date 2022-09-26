import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Duke
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Kate
                </div>
                <div className={s.dialog}>
                    River
                </div>
                <div className={s.dialog}>
                    Vitaly
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