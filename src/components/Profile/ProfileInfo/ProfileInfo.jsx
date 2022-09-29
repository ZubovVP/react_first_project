import './ProfileInfo.module.css';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649131870_3-vsegda-pomnim-com-p-prekrasnaya-priroda-foto-3.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;