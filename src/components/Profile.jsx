import './Profile.module.css';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649131870_3-vsegda-pomnim-com-p-prekrasnaya-priroda-foto-3.jpg'/>
        </div>
        <div>ava + description</div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;