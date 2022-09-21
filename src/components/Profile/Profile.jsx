import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
            <img
                src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649131870_3-vsegda-pomnim-com-p-prekrasnaya-priroda-foto-3.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
    );
}

export default Profile;