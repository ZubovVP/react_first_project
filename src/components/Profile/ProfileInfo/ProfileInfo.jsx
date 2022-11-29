import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import React from "react";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649131870_3-vsegda-pomnim-com-p-prekrasnaya-priroda-foto-3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <p>Полное имя: <span><b>{props.profile.fullName}</b></span></p>
                <p>Обо мне: <span><b>{props.profile.aboutMe}</b></span></p>
                <p>Ищу работу: <span><b>{props.profile.lookingForAJob ? 'Да' : 'НЕТ'}</b></span></p>
                {props.profile.lookingForAJob ? <p>Пожелания по работе: <span><b>{props.profile.lookingForAJobDescription}</b></span></p> : ''}
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;