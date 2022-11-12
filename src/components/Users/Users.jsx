import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I\'m a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
                    followed: true,
                    fullName: 'Vitaly',
                    status: 'I\'m a too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://avatars.mds.yandex.net/i?id=68711115ec04bdb23725428f970f8ece-4955473-images-thumbs&n=13',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I\'m a too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{u.location.counter}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};
export default Users;